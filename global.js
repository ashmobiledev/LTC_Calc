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
        openInNativeBrowser('http://maps.google.com/maps?f=d&saddr=&daddr=7609+West+Jefferson+Blvd+Fort+Wayne%2C+IN+46804&hl=en&geocode=&mra=ls&sll=39.916171,-86.098821&sspn=0.011027,0.019226&ie=UTF8&z=16&layer=c&cbll=39.916176,-86.0988');
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

    //alert('Connection type: ' + states[networkState]);
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

function openInNativeBrowser(link) {

    var ref = window.open(link, '_system', 'location=yes');
    return false;
}