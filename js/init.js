var map;

function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15
    });

    initSearchBox(map);
}

function showPosition(position) {
    var myLat = position.coords.latitude;
    var myLong = position.coords.longitude;
    map.setCenter({lat: myLat, lng: myLong});

    showMe(myLat,myLong);
}

function initSearchBox(map) {
    var input = document.getElementById('searchInput');
    var searchBox = new google.maps.places.SearchBox(input);
    var inputModal = document.getElementById('searchInputModal');
    var searchBoxModal = new google.maps.places.SearchBox(inputModal);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener('places_changed', function() {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        } else {
            // Adding marker on current position
            var marker = new google.maps.Marker({
                map: map,
                title: places[0].name,
                animation: google.maps.Animation.BOUNCE,
                position: places[0].geometry.location});

            marker.addListener('click', function() {
                // alert(this.desc);
            });

            map.panTo(places[0].geometry.location);
            map.setZoom(20);
        }
    });

    searchBoxModal.addListener('places_changed', function() {
        var places = searchBoxModal.getPlaces();

        if (places.length == 0) {
            return;
        }
        $('#coordsData').attr("data-lat", ''+places[0].geometry.location.lat());
        $('#coordsData').attr("data-long", ''+places[0].geometry.location.lng());
    });
}

function showMe(myLat,myLong) {
    var marker = new google.maps.Marker({
        map: map,
        icon: 'media/here.png',
        position: new google.maps.LatLng(myLat,myLong),
        animation: google.maps.Animation.BOUNCE
    });
}





