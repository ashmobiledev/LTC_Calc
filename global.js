// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {

    checkConnection();
}

$(document).ready(function () {
    $(".ashmap").click(function (e) {
        e.preventDefault();
        openMap();
    });
}); 

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}


//----------------------------------
// Load HTML via jQuery AJAX Request
//----------------------------------
function loadURL(url) {

    var retVal;

    $.ajax({
        url: url,
        cache: false
    }).done(function (html) {
        retVal = html;
    });

    return retVal;
};

function openMap() {
    alert('hi');
    var ref = window.open('http://maps.google.com/maps?f=d&amp;saddr=&amp;daddr=7609+West+Jefferson+Blvd+Fort+Wayne%2C+IN+46804&amp;hl=en&amp;geocode=&amp;mra=ls&amp;sll=39.916171,-86.098821&amp;sspn=0.011027,0.019226&amp;ie=UTF8&amp;z=16&amp;layer=c&amp;cbll=39.916176,-86.0988', '_system', 'location=yes');
    return false;
}