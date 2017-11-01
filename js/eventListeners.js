function loadListeners() {

    $('.typeSelection').click(function () {
        $('.typeSelection').removeClass('active');
        $('.typeSelection').parent().css({"color": "initial", "font-weight": "initial"});
        let id = $(this).attr('id');
        $('#resultType').val(id);
        $(this).addClass('active');
        $(this).parent().css({"color": "#00B4D4", "font-weight": "bold"});
    });

    $('#addEvent').click(function () {
        $('#optionalSearchInput').show();
        $('#addNotif').css("height", "80%").modal('open');
    });

    $('#coordChoice').find('input[type=radio]').click(function () {
        let $optionalAddressInput = $('#optionalAddressInput');
        let $optionnalLatLngInput = $('#optionnalLatLngInput');
        switch ($(this).attr('id')) {
            case 'address':
                $optionalAddressInput.show();
                $optionnalLatLngInput.hide();
                break;
            case 'gps':
                $optionnalLatLngInput.show();
                $optionalAddressInput.hide();
                break
        }
    });

    map.addListener('dblclick', function (event) {
        $('#optionalSearchInput').hide();
        $('#latLngInput').hide();
        let latLng = event.latLng;
        let $coordsData = $('#coordsData');
        $coordsData.attr("data-lat", ''+latLng.lat());
        $coordsData.attr("data-long", ''+latLng.lng());
        this.panTo(latLng);
        $('#addNotif').css("height", "55%").modal('open');
    });

// Save button fetch form information & adds marker
    $('#saveModal').click(function () {
        let notification = getFormInfo();
        addMarker(notification);
        clearForm();
    });

// Cancel button closes modal dialog box
    $('#cancelModal').click(function () {
        clearForm();
    });

// Pull/push for the filter sidebar
    $('#toggleFilterBtn').click(function () {
        let $toggleFilter = $('#toggleFilter');
        let $filterCheckbox = $('#filterCheckbox');

        if ($toggleFilter.hasClass('active')) {
            $toggleFilter.animate({width: "10px"}, 600);
            $toggleFilter.removeClass('active');
            $filterCheckbox.hide();
            $(this).css({transform: "rotate(0deg)", right: "-17px", "height":"30px", "margin-top":"-15px"});
        } else {
            $toggleFilter.animate({width: "170px"}, 600);
            $toggleFilter.addClass('active');
            $filterCheckbox.delay(400).queue(function (next) {
                $(this).css("display", "flex");
                next();
            });
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



