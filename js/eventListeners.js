$('.typeSelection').click(function () {
    $('.typeSelection').removeClass('active');
    var id = $(this).attr('id');
    $('#resultType').val(id);
    $(this).addClass('active');
});

$('#addEvent').click(function () {
    $('#optionalModal').show();
    $('#addNotif').modal('open');
});

map.addListener('dblclick', function (event) {
    $('#optionalModal').hide();
    var latLng = event.latLng;
    $('#coordsData').attr("data-lat", ''+latLng.lat());
    $('#coordsData').attr("data-long", ''+latLng.lng());
    this.panTo(latLng);
    $('#addNotif').modal('open');
});

// Save button fetch form informarion & adds marker
$('#saveModal').click(function () {
    var notification = getFormInfo();
    addMarker(notification);
    $('#addNotif').modal('close');
    clearForm();
    console.log(notification);
});

// Cancel button closes modal dialog box
$('#cancelModal').click(function () {
    $('#addNotif').modal('close');
    clearForm();
});