//-----------------------------------------
// Global Variables
//------------------------------------


//-----------------------------------------
// Wait for Cordova to load
//-------------------------------------
document.addEventListener("deviceready", onDeviceReady, false);

//-----------------------------------------
// Cordova is ready
//-----------------------------------------
function onDeviceReady() {

    checkConnection();
}



function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'None';

    //alert('Connection type: ' + states[networkState]);

    if (states[networkState] == "None") {

        vibrateDevice(2000);
        showNativeAlert('A Network connection was not detected.  Mapping features of this app will not function correctly without it.', 'No Network Detected', 'OK');

    }
    
}

//-----------------------------------------------
// Geolocation - Get Current Position
//-----------------------------------------------
function geolocateMe() {
    var LatLngCurrent = new Array();

    try {
        LatLngCurrent = navigator.geolocation.getCurrentPosition(onSuccessGeolocateMe, onErrorGeolocateMe);
        
    }
    catch (e) {
        vibrateDevice(2000);
        showNativeAlert('Error during geolocation', 'Geolocation Error', 'OK');
    }
    alert(LatLngCurrent);
    return LatLngCurrent;
}

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccessGeolocateMe = function (position) {
    var LatLng = new Array();

    LatLng[0] = position.coords.latitude;
    LatLng[1] = position.coords.longitude;
alert('Latitude: ' + position.coords.latitude + '\n' +
              'Longitude: ' + position.coords.longitude + '\n' +
              'Altitude: ' + position.coords.altitude + '\n' +
              'Accuracy: ' + position.coords.accuracy + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
              'Heading: ' + position.coords.heading + '\n' +
              'Speed: ' + position.coords.speed + '\n' +
              'Timestamp: ' + position.timestamp + '\n');


    return LatLng;

        
};

// onError Callback receives a PositionError object
//
function onErrorGeolocateMe(error) {

    vibrateDevice(2000);
    showNativeAlert('Error during geolocation', 'Geolocation Error', 'OK');

//    alert('code: ' + error.code + '\n' +
//          'message: ' + error.message + '\n');
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
}

//-----------------------------------------------
// Vibrate Device
//-----------------------------------------------
function vibrateDevice(duration) {

    try {
        navigator.notification.vibrate(duration);
    }
    catch (e) {
        // do nothing (web)
    }
    return false;
}

//-----------------------------------------------
// Show Native Alert
//-----------------------------------------------
function showNativeAlert(message, title, buttonName) {

    try {
        navigator.notification.alert(
            message,                // message
            alertDismissed,         // callback
            title,                  // title
            buttonName              // buttonName
        );
    }
    catch (e) {
        // web
        Ext.Msg.alert(message);
    }
    return false;
}

function alertDismissed() {
    // do something
}

//-----------------------------------------------
// Show Native Confirm
//-----------------------------------------------
function showNativeConfirmation(message, title, buttonNames) {

    try {
        navigator.notification.confirm(
            message,                // message
            confirmationCallback,         // callback
            title,                  // title
            buttonNames              // buttonNames (seperate by commas)
        );
    }
    catch (e) {
        // web
        Ext.Msg.alert(message);
    }
    //return false;
}

function confirmationCallback(buttonIndex) {
    // do something
}

//-----------------------------------------------
// Print Results
//-----------------------------------------------
function printResults() {

    try {
        //resultTable
        // create print frame

        var pFrame = Ext.get('printerFrame');
        if (!pFrame) {
            Ext.getBody().insertHtml("beforeEnd", "<iframe id='printerFrame' style='display:none'> </iframe>");
            pFrame = Ext.get('printerFrame');
        }

        var contentWindow = pFrame.dom.contentWindow;
        contentWindow.document.body.innerHTML = $("#results").html();
        contentWindow.print();
    }
    catch (e) {
        showNativeAlert("error printing", "Print Error", "OK");
         
    }
    return false;
}

//-----------------------------------------------
// Open links in native browser outside of app
//-----------------------------------------------
function openInNativeBrowser(link) {

    var ref = window.open(link, '_system', 'location=yes');
    return false;
}

//-----------------------------------------------
// Initiates call on device
//-----------------------------------------------
function makeCall(number) {

    window.location.href = "tel:" + number;
    return false;
}

//-----------------------------------------------
// Initiates email on device
//-----------------------------------------------
function sendEmail(address) {

    window.location.href = "mailto:" + address;
    return false;
}


function checkInputs() {
    // get input values for calculation
    //-----------------------------------
    var currentage = Ext.ComponentQuery.query('#currentage')[0].getValue();
    var agebegin = Ext.ComponentQuery.query('#agebegin')[0].getValue();
    var careyears = Ext.ComponentQuery.query('#careyears')[0].getValue();
    var monthlybenefit = Ext.ComponentQuery.query('#monthlybenefit')[0].getValue();
    var inflation = Ext.ComponentQuery.query('#inflation')[0].getValue();
    var amount;
    var summaryInfo;
    var resultsTable;



    currentage = parseFloat(currentage);
    agebegin = parseInt(agebegin);
    careyears = parseInt(careyears);
    monthlybenefit = parseFloat(monthlybenefit);
    amount = monthlybenefit;

    if (amount > 0) {

        return true;
        

    }
    else {
        return false;
        
    }
}

