let notifs = [];


notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '10011985', '1212', '43.583941', '3.887816', 12));
notifs.push(new Notification(null, null, 'accident', 'Warning the car is crashed be very careful please!', '06111992', '1313', '43.480380', '3.875980', null));
notifs.push(new Notification(null, null, 'police', '22 vla les keufs!!!', '25120000', '1414', '43.980994', '3.279848', null));
notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '11092001', '1515', '43.432410', '3.586065', 5));
notifs.push(new Notification(null, null, 'accident', 'Achtung! das otomobïl is vertungen!', '14071789', '1616', '43.881770', '3.975681', null));
//
// notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '10011985', '1212', '43.423941', '3.907816', 12));
// notifs.push(new Notification(null, null, 'accident', 'Warning the car is crashed be very careful please!', '06111992', '1313', '43.374564', '3.785980', null));
// notifs.push(new Notification(null, null, 'police', '22 vla les keufs!!!', '25120000', '1414', '43.623994', '3.864848', null));
// notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '11092001', '1515', '43.125410', '3.899065', 5));
// notifs.push(new Notification(null, null, 'accident', 'Achtung! das otomobïl is vertungen!', '14071789', '1616', '43.601770', '3.775681', null));
//
// notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '10011985', '1212', '43.581941', '3.877816', 12));
// notifs.push(new Notification(null, null, 'accident', 'Warning the car is crashed be very careful please!', '06111992', '1313', '43.580380', '3.875980', null));
// notifs.push(new Notification(null, null, 'police', '22 vla les keufs!!!', '25120000', '1414', '43.580994', '3.879848', null));
// notifs.push(new Notification(null, null, 'jam', 'Hey! Take a bike next time bro!', '11092001', '1515', '43.582410', '3.886065', 5));
// notifs.push(new Notification(null, null, 'accident', 'Achtung! das otomobïl is vertungen!', '14071789', '1616', '43.581770', '3.875681', null));


notifs.forEach(function(notif) {
    addMarker(notif);
});

