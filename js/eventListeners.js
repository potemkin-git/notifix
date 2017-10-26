$('.typeSelection').click(function () {
    $('.typeSelection').removeClass('active');
    var id = $(this).attr('id');
    $('#resultType').val(id);
    $(this).addClass('active');
});

$('#addEvent').click(function () {
    $('#optionalModal').show();
    $('#latLngInput').show();
    $('#addNotif').modal('open');
});

map.addListener('dblclick', function (event) {
    $('#optionalModal').hide();
    $('#latLngInput').hide();
    var latLng = event.latLng;
    $('#coordsData').attr("data-lat", ''+latLng.lat());
    $('#coordsData').attr("data-long", ''+latLng.lng());
    this.panTo(latLng);
    $('#addNotif').modal('open');
});

// Save button fetch form information & adds marker
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

// Pull/push for the filter sidebar
$('#toggleFilterBtn').click(function () {
    if ($('#toggleFilter').hasClass('active')) {
        $('#toggleFilter').animate({width: "10px"}, 300);
        $('#toggleFilter').removeClass('active');
        $('.filterCheckbox').hide();
        $(this).css("transform", "rotate(0deg)");
    } else {
        $('#toggleFilter').animate({width: "180px"}, 300);
        $('#toggleFilter').addClass('active');
        $('.filterCheckbox').show();
        $(this).css("transform", "rotate(180deg)");
    }
});

// Filter actions
$('#jamFilter').click(function () {
    if ($(this).is(':checked')) {
        jamLayer.setMap(map);
    } else {
        jamLayer.setMap(null);
    }
});

$('#accidentFilter').click(function () {
    if ($(this).is(':checked')) {
        accidentLayer.setMap(map);
    } else {
        accidentLayer.setMap(null);
    }
});

$('#policeFilter').click(function () {
    if ($(this).is(':checked')) {
        policeLayer.setMap(map);
    } else {
        policeLayer.setMap(null);
    }
});


