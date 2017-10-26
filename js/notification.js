class Notification {
    constructor(type, desc, date, time, lat, long) {
        this.type = type;
        this.desc = desc;
        this.date = date;
        this.time = time;
        this.coord = new google.maps.LatLng(lat,long);
    }
}

