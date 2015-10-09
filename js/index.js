$(function(){
  $('#main-navbar').affix({
      offset: {
        top: $('#main-navbar').offset().top - 50
      }
  });

  // $('.navbar-toggle').click(function(){
  // })

  document.addEventListener("touchstart", function(){ return true; }, true);

  $(".share-btn").each(function() {
    var el = $(this);
    var url = el.attr("href")
    if(!url || url === "" || url==="#") {
      return true;
    }
    el.click(function() {
      // reference:
      var params = "scrollbars=no,resizable=yes,toolbar=no,location=yes";
      var width = 550;
      var height = 420;
      //centering
      var left = Math.round((window.screen.width - width) / 2);
      var top =  Math.round((window.screen.height - height) / 2);
      if (top > 0) { // skip the popup and back to link if window.screen.height <= height
        window.open(url, null , params + ",width=" + width + ",height=" + height + ",left=" + left + ",top=" + top)
        return false; //break the event as we opened the link
      }
      return true; //continue to open the link for mobile or small screen device, no popup
    })
  })

  $(function(){
    if (!$("#transport .map-overlay:visible").size()){
      return false;
    } else {
      window.init = function init() {

          var mapOptions = {
              zoom: 19,
              center: new google.maps.LatLng(22.2601801,114.1314456),
              scrollwheel: false,
              disableDefaultUI: true,
              // Edit with Snazzy Maps.
              styles:
              [
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#00fff3"
                        },
                        {
                            "weight": "1.63"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "weight": "0.01"
                        },
                        {
                            "color": "#3ebfb9"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#cae2e7"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#00cfff"
                        },
                        {
                            "lightness": "0"
                        },
                        {
                            "gamma": "1.00"
                        },
                        {
                            "weight": "0.20"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#1baacb"
                        }
                    ]
                }
              ]

          };

          var mapElement = $('#transport .map-overlay')[0];

          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map(mapElement, mapOptions);
          //var pinImage = new google.maps.MarkerImage("http://mt.google.com/vt/icon?color=ff004C13&name=icons/spotlight/spotlight-waypoint-blue.png");
          // var marker = new google.maps.Marker({
          //             position: new google.maps.LatLng(22.2603801,114.1314456),
          //             map: map,
          //             //icon: pinImage,
          //             title: 'Cyberport 3'
          //         });

      }

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEhvq_HGdiQMpolPekgKm8QhVfctKoTXg&sensor=false&callback=init';
      document.body.appendChild(script);

    }

  })
});
