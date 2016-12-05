var url = 'https://<AWS_API_Gateway_ID>.execute-api.us-east-1.amazonaws.com/dev/change';
var onStatus = 1;
var offStatus = 0;

function httpGet(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function updateStatus(status) {
    var updateUrl = url + '/' + status;
    httpGet(updateUrl, updateStatusHtml);
}

function updateStatusHtml(data) {
    var res = JSON.parse(data);
    var body = JSON.parse(res['body-json']['body']);
    var stateData = JSON.parse(body.data.payload);
    var state = parseInt(stateData.state.reported.led_mode);
    if(state === 1) {
        document.getElementById('led').style.backgroundColor = "green";
    } else if(state === 0) {
        document.getElementById('led').style.backgroundColor = "red";
    } else {
        document.getElementById('led').style.backgroundColor = "";
    }
}

var onButton = function() {
	console.log('on button');
    updateStatus(onStatus);
};

var offButton = function() {
	console.log('off button');
    updateStatus(offStatus);
};

