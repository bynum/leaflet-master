angular.module('starter.controllers', ["leaflet-directive"])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('DsljCtrl', ['$scope', '$http', 'leafletData', '$stateParams', function ($scope, $http, leafletData, $stateParams) {

    var markers = [];
    function onEachFeature(feature, layer, map) {

      var icon = new L.TextIcon(
        {
          temperature: feature.properties.temperature,
          rH: feature.properties.rH,
          color: 'red',
          windNum: parseInt((feature.properties.windPower - 0.01) / 2),
          windDirection: feature.properties.windDirection
        }
        );
      var marker = L.marker(feature.geometry.coordinates.reverse(), { icon: icon }).addTo(map);
      markers.push(marker);
      //marker.options.icon.removeElement("rHDiv");
            
      var popupContent = "<p>I started out as a GeoJSON " +
        feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

      if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
      }
      layer.bindPopup(popupContent);
    }



    angular.extend($scope, {
      guizhou: {
        lat: 27,
        lng: 106.71,
        zoom: 7
      },
      defaults: {
        scrollWheelZoom: true,
        tileLayer: "",
        maxZoom: 14,
        path: {
          weight: 10,
          color: '#800000',
          opacity: 1
        }
      }
    });
   
    // Get the countries geojson data from a JSON
    $http.get("json/map.json").success(function (data, status) {
      angular.extend($scope, {
        geojson: {
          data: data,
          style: {
            fillColor: "rgba(0, 0, 0, 0.3)",
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          }
        }
      });
    });
    leafletData.getMap('mymap').then(function (map) {
      console.log("123");
      L.geoJson([bicycleRental], {
        style: function (feature) {
          return feature.properties && feature.properties.style;
        },
        onEachFeature: function (feature, layer) {

          var icon = new L.TextIcon(
            {
              temperature: feature.properties.temperature,
              rH: feature.properties.rH,
              color: 'red',
              windNum: parseInt((feature.properties.windPower - 0.01) / 2),
              windDirection: feature.properties.windDirection
            }
            );
          var marker = L.marker(feature.geometry.coordinates.reverse(), { icon: icon }).addTo(map);
          markers.push(marker);
          //marker.options.icon.removeElement("rHDiv");
            
          var popupContent = "<p>I started out as a GeoJSON " +
            feature.geometry.type + ", but now I'm a Leaflet vector!</p>";

          if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
          }
          layer.bindPopup(popupContent);
        },
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, {
            radius: 4,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
        }
      }).addTo(map);
    });
  }]);
