google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11, // Set the zoom level manually
    scrollwheel: false,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(50.488987, 30.516440), // New York

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles:
        [
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "weight": "0.56"
                    },
                    {
                        "saturation": "-83"
                    },
                    {
                        "color": "#c0aea1"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "hue": "#ffa300"
                    },
                    {
                        "gamma": "0.00"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#282524"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "0"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#38312c"
                    },
                    {
                        "gamma": "1"
                    },
                    {
                        "weight": "0"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#17a8d3"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(50.488987, 30.516440),
    map: map,
    // title: 'м. Павелецкая, Летниковская ул., д. 10 стр. 5',
    icon: {
        url: 'img/map.png',
        scaledSize: new google.maps.Size(30, 30)
    }
  });
}