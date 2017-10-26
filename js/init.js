var map;
var infoclosed = true;
var jamLayer = new google.maps.Data();
var accidentLayer = new google.maps.Data();
var policeLayer = new google.maps.Data();
var masterLayer = [jamLayer, accidentLayer, policeLayer];

initMap();
initLayers();

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

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

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

function initLayers() {

    masterLayer.forEach(function (layer) {

        layer.setStyle(function(feature) {
            return {
                icon: {
                    url: "media/"+feature.getProperty('notif').type+".png",
                    scaledSize: new google.maps.Size(40, 40)
                },
                cursor: 'pointer'
            }
        })

        layer.addListener('click', function (elem) {
            var infowindow = elem.feature.getProperty('infoWindow');
            var infowindowShort = elem.feature.getProperty('infoWindowShort');
            var notif = elem.feature.getProperty('notif');

            if (typeof( window.infoopened ) != 'undefined') infoopened.close();
            infowindow.open(map);
            infowindowShort.close();
            infoopened = infowindow;
            infoclosed = false;

            google.maps.event.addListener(infowindow, 'domready', function () {
                $('#thumbUp').click(function () {
                    notif.nbConf++;
                });
                $('#thumbDown').click(function () {
                    notif.nbConf--;
                });
            });

            google.maps.event.addListener(infowindow, 'closeclick', function () {
                infoclosed = true;
            });
        })

        layer.addListener('mouseover', function (elem) {
            var infowindowShort = elem.feature.getProperty('infoWindowShort');
            if (!infoclosed) return;
            infowindowShort.open(map);
        })

        layer.addListener('mouseout', function (elem) {
            var infowindowShort = elem.feature.getProperty('infoWindowShort');
            infowindowShort.close();
        })

    })
}


