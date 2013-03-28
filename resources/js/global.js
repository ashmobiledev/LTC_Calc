$(document).ready(function () {
    $(".ashmap").click(function () {
        event.preventDefault();
        window.open('http://maps.google.com/maps?f=d&amp;saddr=&amp;daddr=7609+West+Jefferson+Blvd+Fort+Wayne%2C+IN+46804&amp;hl=en&amp;geocode=&amp;mra=ls&amp;sll=39.916171,-86.098821&amp;sspn=0.011027,0.019226&amp;ie=UTF8&amp;z=16&amp;layer=c&amp;cbll=39.916176,-86.0988', '_system', 'location=yes');
    });
});

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