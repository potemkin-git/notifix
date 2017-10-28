function loadListeners() {

    $('.typeSelection').click(function () {
        $('.typeSelection').removeClass('active');
        let id = $(this).attr('id');
        $('#resultType').val(id);
        $(this).addClass('active');
    });

    $('#addEvent').click(function () {
        $('#optionalSearchInput').show();
        $('#latLngInput').show();
        $('#addNotif').modal('open');
    });

    map.addListener('dblclick', function (event) {
        $('#optionalSearchInput').hide();
        $('#latLngInput').hide();
        let latLng = event.latLng;
        let $coordsData = $('#coordsData');
        $coordsData.attr("data-lat", ''+latLng.lat());
        $coordsData.attr("data-long", ''+latLng.lng());
        this.panTo(latLng);
        $('#addNotif').modal('open');
    });

// Save button fetch form information & adds marker
    $('#saveModal').click(function () {
        let notification = getFormInfo();
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
        let $toggleFilter = $('#toggleFilter');
        let $filterCheckbox = $('#filterCheckbox');

        if ($toggleFilter.hasClass('active')) {
            $toggleFilter.animate({width: "10px"}, 300);
            $toggleFilter.removeClass('active');
            $filterCheckbox.hide();
            $(this).css({transform: "rotate(0deg)", right: "-17px", "height":"30px", "margin-top":"-15px"});
        } else {
            $toggleFilter.animate({width: "170px"}, 300);
            $toggleFilter.addClass('active');
            $filterCheckbox.css("display", "flex");
            $(this).css({"transform":"rotate(180deg)", "right":"-1px", "height":"20px", "margin-top":"-10px"});
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
}



