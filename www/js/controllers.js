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
    var circles = [];
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
    function getCurrentTime() {
      var date = new Date();
      date.AddHours(-8);
      return date.Format("yyyyMMddhh") + "0000";
    }
    leafletData.getMap('mymap').then(function (map) {

      $http.jsonp("http://10.203.89.55/cimiss-web/api", {
        params: {
          userId: 'user_gzqxt',
          pwd: 'user_gzqxt_api1',
          times: getCurrentTime(),
          interfaceId: 'getSurfEleInRegionByTime',
          dataCode: 'SURF_CHN_MUL_HOR',
          elements: 'Station_ID_C,Lon,Lat,TEM,pre_1h,prs,rhu,vis,WIN_S_Avg_2mi,WIN_D_Avg_2mi',
          AdminCodes: '520000',
          staLevels: '011,012,013',
          callbackName: 'JSON_CALLBACK',
          dataFormat: 'jsonp'
        }
      }).success(function (data) {
        console.log();
        for (var i = 0; i < data.rowCount; i++) {
          var icon = new L.TextIcon(
            {
              temperature: data.DS[i].TEM,
              rH: data.DS[i].rhu,
              color: 'red',
              windNum: parseInt((data.DS[i].WIN_S_Avg_2mi - 0.01) / 2),
              windDirection: data.DS[i].WIN_D_Avg_2mi
            }
            );
          var marker = L.marker([data.DS[i].Lat, data.DS[i].Lon], { icon: icon });
          markers.push(marker);
          map.addLayer(marker);
          var circle = L.circleMarker([data.DS[i].Lat, data.DS[i].Lon], {
            radius: 4,
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
          });
          circles.push(circle);
        }
        var circleLayers = L.layerGroup(circles).addTo(map);
        var overlayMaps = {
          "circleLayers": circleLayers
        };
        L.control.layers({}, overlayMaps).addTo(map);

      }).error(function (err) { });
      /* $http.get('data/cimissdata.json').success(function (data, status) {
 
         for (var i = 0; i < data.rowCount; i++) {
           var icon = new L.TextIcon(
             {
               temperature: data.DS[i].TEM,
               rH: data.DS[i].rhu,
               color: 'red',
               windNum: parseInt((data.DS[i].WIN_S_Avg_2mi - 0.01) / 2),
               windDirection: data.DS[i].WIN_D_Avg_2mi
             }
             );
           var marker = L.marker([data.DS[i].Lat, data.DS[i].Lon], { icon: icon }).addTo(map);
           markers.push(marker);
           L.circleMarker({ lat: data.DS[i].Lat, lon: data.DS[i].Lon }, {
             radius: 4,
             fillColor: "#ff7800",
             color: "#000",
             weight: 1,
             opacity: 1,
             fillOpacity: 0.8
           }).addTo(map);
         }
       });*/
    });
  }]);
  
