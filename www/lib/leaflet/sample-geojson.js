var freeBus = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.00341892242432, 39.75383843460583],
                    [-105.0008225440979, 39.751891803969535]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 1
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-105.0008225440979, 39.751891803969535],
                    [-104.99820470809937, 39.74979664004068]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": true
            },
            "id": 2
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-104.99820470809937, 39.74979664004068],
                    [-104.98689651489258, 39.741052354709055]
                ]
            },
            "properties": {
                "popupContent": "This is free bus that will take you across downtown.",
                "underConstruction": false
            },
            "id": 3
        }
    ]
};
var lightRailStop = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "popupContent": "18th & California Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98999178409576, 39.74683938093904]
            }
        }, {
            "type": "Feature",
            "properties": {
                "popupContent": "20th & Welton Light Rail Stop"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.98689115047453, 39.747924136466565]
            }
        }
    ]
};

var bicycleRental = {
    "type": "FeatureCollection",
    "features": [
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    107.98,
                    26.60
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 120,
                "windPower": 12,
                "rH": 50
            },
            "id": 51
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.01,
                    26.25
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 300,
                "windPower": 2,
                "rH": 20
            },
            "id": 52
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    105.23,
                    27.30
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 270,
                "windPower": 5.4,
                "rH": 70
            },
            "id": 54
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    104.86,
                    26.58
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 0,
                "windPower": 4.4,
                "rH": 60
            },
            "id": 55
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    109.18,
                    27.81
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 180,
                "windPower": 1.2,
                "rH": 30
            },
            "id": 57
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.88,
                    27.70
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 45,
                "windPower": 8.2,
                "rH": 80
            },
            "id": 58
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    106.72,
                    26.58
                ]
            },
            "type": "Feature",
            "properties": {
                "temperature": 20,
                "windDirection": 90,
                "windPower": 20.4,
                "rH": 80
            },
            "id": 74
        }
    ]
};


var coorsField = {
    "type": "Feature",
    "properties": {
        "popupContent": "Coors Field"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404191970824, 39.756213909328125]
    }
};