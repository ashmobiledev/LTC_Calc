// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {

    checkConnection();
}

// this doesn't work on mobile... don't even try it.  I'm leaving this here so you see it and read this.... don't do it.  
$(document).ready(function () {

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

