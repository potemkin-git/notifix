var infoclosed = true;
initMap();

$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
        default: 'now', // Set default time: 'now', '1:30AM', '16:30'
        fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
        twelvehour: false, // Use AM/PM or 24-hour format
        donetext: 'OK', // text for done-button
        cleartext: 'Clear', // text for clear-button
        canceltext: 'Cancel', // Text for cancel-button
        autoclose: true, // automatic close timepicker
        ampmclickable: true, // make AM PM clickable
        aftershow: function(){} //Function for after opening timepicker
    });
});

function getFormInfo() {
    var infos = [];
    infos.type = $('#resultType').val();
    infos.lat = $('latForm').val();
    infos.lng = $('lngForm').val();
    infos.date = $('#dateInput').val() /*.pickadate()*/;
    infos.hour = $('#hourInput').val();
    infos.desc = $('#descEvent').val();
    var currLat = $('#coordsData').attr('data-lat');
    var currLong = $('#coordsData').attr('data-long');

    if (infos.lat != null && infos.lng != null){
        //check format coordonnées
        currLat = infos.lat;
        currLong = infos.lng;
    }

    var notif = new Notification(infos.type, infos.desc, infos.date, infos.time, currLat, currLong);

    return notif;
}

function clearForm() {
    $('#formNotif')[0].reset();
    $('.typeSelection').removeClass('active');
}

function addMarker(notif) {

    var src = "media/";
    switch (notif.type) {
        case 'jam':
            src += 'jam.png'
            break;
        case 'accident':
            src += 'accident.png'
            break;
        case 'police':
            src += 'police.png'
            break;
    }

    var marker = new google.maps.Marker({
        map: map,
        icon: {url: src, scaledSize: new google.maps.Size(40, 40)},
        position: notif.coord,
        animation: google.maps.Animation.DROP
    });

    var infowindowData =
        "<p>Type: " + notif.type + "</p>"+
        "<p>Description: " + notif.desc + "</p>"+
        "<p>Date: " + notif.date + "</p>"+
        "<p>Time: " + notif.hour + "</p>"+
        "<p>Où: " + notif.coord + "</p>";

    var infowindow = new google.maps.InfoWindow({
        content: infowindowData
    });

    marker.addListener('click', function () {
        if (typeof( window.infoopened ) != 'undefined') infoopened.close();

        infowindow.open(map,marker);
        infowindowShort.close();
        infoopened = infowindow;
        infoclosed = false;
    });

    google.maps.event.addListener(infowindow, 'closeclick', function () {
        infoclosed = true;
    });

    var infowindowShortData =
        "<p>Type: " + notif.type + "</p>"+
        "<p>Description: " + notif.desc + "</p>";

    var infowindowShort = new google.maps.InfoWindow({
        content: infowindowShortData
    });

    marker.addListener('mouseover', function () {
        if (!infoclosed) return;
        infowindowShort.open(map,marker);
    });

    marker.addListener('mouseout', function () {
        infowindowShort.close();
    });

    map.panTo(notif.coord);
    map.setZoom(17);
}



