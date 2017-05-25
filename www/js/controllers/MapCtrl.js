app.controller('MapCtrl', function($scope, ArmazenaAddress, GeoService){

    var myLatlng = {lat: -28.2328124, lng: -52.3811458};
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var labelIndex = 0;
    var marker;
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10,center: myLatlng});
    var geocoder = new google.maps.Geocoder();

//** SELECIONA MODO DE PREVISAO
      $scope.isCkeched = function(endereco){
          if(endereco.selecionado){
            endereco.selecionado = true;
            showMap(endereco.lat, endereco.lng);
          }
      }
//**


//**SALVA ENDEREÇOS DO MAPA
    var meusEnderecos = [];
    var endereco = {id: '', lat: undefined, lng: undefined, selecionado: false};


    function obterEnderecos(){
      meusEnderecos = ArmazenaAddress.getAddress();
      $scope.meusEnderecos = meusEnderecos;
    }
    obterEnderecos();

    $scope.salvarMeusEnderecos = function(){
      endereco.id = document.getElementById('address').value;
      endereco.lat = myLatlng.lat;
      endereco.lng = myLatlng.lng;
      ArmazenaAddress.addAddress(endereco);
      obterEnderecos();
    }
//**
//** APAGA ENDEREÇOS SALVOS
    $scope.apagarEnderecos = function(meusEnderecos){
        meusEnderecos.filter(function(endereco){

        });
    }
//**

// **ADICIONA MARCADOR NO MAPA QUANDO CLICADO;
    google.maps.event.addListener(map, 'click', function(event) {
      showMap(event.latLng.lat(), event.latLng.lng());
    });
//**

// **MARCA LOCALIZAÇÃO NO MAPA;
    var showMap = function(latitude, longitude) {
      myLatlng.lat = latitude;
      myLatlng.lng = longitude;
      map.setCenter(new google.maps.LatLng(myLatlng.lat, myLatlng.lng));
      marker = new google.maps.Marker({position: myLatlng, label: labels[labelIndex++ % labels.length], map: map});
    }
//**

//**AUTOCOMPLETE INPUT DE ENDEREÇO;
    var searchBox = new google.maps.places.SearchBox(document.getElementById('address'));
//**

// **BUSCA LOCALIZAÇÂO POR INPUT DE ENDEREÇO;
    document.getElementById('submit').addEventListener('click', function() {
      geocodeAddress(geocoder, map);
    });
    function geocodeAddress(geocoder, resultsMap) {
        var address = document.getElementById('address').value;
      geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          showMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
//**

// **RETORNA GEOLOCALIZAÇÃO ATUAL POR GPS;
    $scope.GeoPosition = function(){
        GeoService.getPosition()
          .then(function(position) {
            console.log("GEOPOSITION SUCCESS");
            showMap(position.coords.latitude, position.coords.longitude);
          }, function(err) {
            console.log('Get CurrentPosition Error');
          });
    }
// setInterval(GeoPosition, 5000);


})
app.service('ArmazenaAddress',[function(){
    this.getAddress = function(){
      var enderecos = [];
      if( typeof localStorage.enderecos != 'undefined'){
          enderecos = JSON.parse(localStorage.enderecos);
      }
      return enderecos;
    }


    this.addAddress = function(address){
      var enderecos = [];
      if( typeof localStorage.enderecos != 'undefined'){
          enderecos = JSON.parse(localStorage.enderecos);
      }
      enderecos.push(address);
      localStorage.setItem('enderecos', JSON.stringify(enderecos));
    }

}])
app.factory('GeoService', function($ionicPlatform, $cordovaGeolocation){

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  return {
    getPosition: function() {
      return $ionicPlatform.ready()
        .then(function() {
          return $cordovaGeolocation.getCurrentPosition(posOptions);
        })
    }
  };
});
