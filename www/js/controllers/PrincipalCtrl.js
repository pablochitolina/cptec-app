app.controller('PrincipalCtrl', function ($ionicLoading, $ionicModal, $timeout, $scope, $http, Dados, $location, $ionicScrollDelegate, ionicMaterialInk) {

  ionicMaterialInk.displayEffect();
  $scope.selectedSlide = 0;
  $scope.minWidth = 20;
  var info = {};
  $scope.labels = [];
  $scope.data = [];
  $scope.series = ['Temperatura', 'Precipitação', 'Umidade', 'Vento', 'Radiação'];
  var ultimaHora;
  $scope.dados = [];

  var dia = [];
  var arrayAnchor = [];
  var dirX = 'esq';
  //http://html-color-codes.info/
  var arrayCoresHex = ['#000', '#04B404', '#5FB404', '#AEB404', '#B45F04', '#B40404', '#B4045F', '#B404AE', '#5F04B4', '#0404B4', '#045FB4', '#04B4AE'];
  $scope.corBack = arrayCoresHex[0];

  $scope.mostraHJ = true;
  $scope.alinhamento = 'center';

  var fab = document.getElementById('fabChart');
    fab.addEventListener('click', function () {
      console.log('click chart')
        $scope.showChart();
    });


  $scope.color = function (numSlide) {
    console.log('chamou cor')
    for (i = 0; i < arrayAnchor.length; i++) {
      if (numSlide == arrayAnchor[i]) {
        return arrayCoresHex[i];
      }

    }
  }

  function createArray(length) {
    var arr = new Array(length || 0),
      i = length;

    if (arguments.length > 1) {
      var args = Array.prototype.slice.call(arguments, 1);
      while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
  }

  $scope.parseInt = function (num) {
    return parseInt(num);
  }

  var somaIni = 0;
  var mudouDia = false;

  Dados.all().forEach(arrayDados);

  function arrayDados(element, index, array) {

    info = {
      ano: element.datetime.slice(0, 4),
      mes: element.datetime.slice(4, 6),
      dia: element.datetime.slice(6, 8),
      hr: element.datetime.slice(8, 10),
      data: element.data
    };

    $scope.dados.push(info);

    if (index == 0) {
      arrayAnchor.push(info.dia);
    }

    if (info.dia !== arrayAnchor[arrayAnchor.length - 1]) {
      mudouDia = true;
      arrayAnchor.push(info.dia);

    }
    if (!mudouDia) {
      somaIni++;
    }


  }

  $scope.dadosSlide = [];

  $scope.slideTo = function (index) {


    $scope.selectedSlide = index;
    $scope.corBack = arrayCoresHex[index];
    //console.log("anchorTo " + arrayAnchor[index]);
    if (index == 0) {
      $scope.mostraIni = false;
    } else {
      $scope.mostraIni = true;
    }
    if (index == arrayAnchor.length - 1) {
      $scope.mostraFim = false;
    } else {
      $scope.mostraFim = true;
    }

    while ($scope.dadosSlide.length > 0) {
      $scope.dadosSlide.pop();
    }

    if (index == 0) {

      if (somaIni <= 2) {
        $scope.dadosSlide.push($scope.dados[somaIni - 1]);
        $scope.minWidth = 100;
        $scope.alinhamento = 'center';
      }else {
        var tamAjustado = 0;
        for (i = 1; i < somaIni; i++) {

          if (i % 2 == 0) { //FAZ APARECER DE 2 EM 2 HORAS
            tamAjustado++;
            $scope.dadosSlide.push($scope.dados[i]);
          }
        }
        var tam = 100 / (tamAjustado);

        if (tam < 20) {
          $scope.minWidth = 20;
          $scope.alinhamento = 'left';
        } else {
          $scope.minWidth = tam;
          $scope.alinhamento = 'center';
        }
      }


    } else {

      $scope.minWidth = 20;
      $scope.alinhamento = 'left';
      for (i = (somaIni + 24 * index) - 24; i < (somaIni + 24 * index); i++) {
        if (parseInt($scope.dados[i].hr) % 2 == 0) { //FAZ APARECER DE 2 EM 2 HORAS
          $scope.dadosSlide.push($scope.dados[i]);
        }
      }
    }
  }

  $scope.slideTo(0);

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.scrollTo = function (id) {
    //console.log("scrollTo " + id);
    $location.hash(id);
    $ionicScrollDelegate.anchorScroll(true);
  };

  $scope.mostraIni = false;
  $scope.mostraFim = true;
  $scope.anchor = true;

  $scope.anchorTo = function (index) {

    $scope.selectedSlide = index;
    $scope.corBack = arrayCoresHex[index];
    //console.log("anchorTo " + arrayAnchor[index]);
    if (index == 0) {
      $scope.mostraIni = false;
    } else {
      $scope.mostraIni = true;
    }
    if (index == arrayAnchor.length - 1) {
      $scope.mostraFim = false;
    } else {
      $scope.mostraFim = true;
    }
    if ($scope.anchor) {
      $location.hash(arrayAnchor[index]);
      $ionicScrollDelegate.anchorScroll(true);
    }
    $scope.anchor = true;
  }

  $scope.prevSlide = function (index) {
    $scope.selectedSlide -= 1;
  }
  $scope.nextSlide = function (index) {
    $scope.selectedSlide += 1;
  }

  var firstAparece = '0';

  $scope.inview = function (index, inview) {
    if (inview) {
      firstAparece = index;
    }
  }

  var xTouch = 0;

  $scope.onTouch = function (event) {

    xTouch = event.gesture.center.pageX;
  }

  $scope.onRelease = function (event) {

    $timeout(function () {
      if (arrayAnchor[$scope.selectedSlide] !== firstAparece) {
        for (i = 0; i < arrayAnchor.length; i++) {
          if (firstAparece === arrayAnchor[i]) {
            $scope.anchor = false;
            $scope.selectedSlide = i;
          }
        }
      }
    }, 100);

  }

  $scope.arrayGraph = [true, false, false, false, false];

  $scope.check = function (escolha) {

    $scope.arrayGraph = [false, false, false, false, false];
    $scope.arrayGraph[escolha] = !$scope.arrayGraph[escolha];
    montaGrafico($scope.arrayGraph);

  }

  $scope.showChart = function () {

    $scope.openModal();
    $timeout(function () {
      montaGrafico($scope.arrayGraph);
    }, 250);

  }

  function montaGrafico(array) {

    index = $scope.selectedSlide;

    while ($scope.labels.length > 0) {
      $scope.labels.pop();
    }


    if (index == 0) {
      $scope.data = createArray(5, somaIni);
      var inc = 1;

      if (somaIni <=2) {
        inc = 1;
      } else {
        inc = 2;
      }

      var som = 0;
      for (i = 0; i < somaIni; i += inc) {

        $scope.labels.push(parseInt($scope.dados[i].hr) + ':00');
        if (array[0]) {
          $scope.data[0][som] = $scope.dados[i].data.tp2m;
        }
        if (array[1]) {
          $scope.data[1][som] = $scope.dados[i].data.ocis;
        }
        if (array[2]) {
          $scope.data[2][som] = $scope.dados[i].data.ur2m;
        }
        if (array[3]) {
          $scope.data[3][som] = $scope.dados[i].data.prec;
        }
        if (array[4]) {
          $scope.data[4][som] = $scope.dados[i].data.v10m;
        }
        som ++;
      }

    } else {
      $scope.data = createArray(5, 12);
      var sum = 0;
      for (i = (somaIni + 24 * index) - 24; i < (somaIni + 24 * index); i += 2) {

        $scope.labels.push(parseInt($scope.dados[i].hr) + ':00');

        if (array[0]) {
          $scope.data[0][sum] = $scope.dados[i].data.tp2m;
        }
        if (array[1]) {
          $scope.data[1][sum] = $scope.dados[i].data.ocis;
        }
        if (array[2]) {
          $scope.data[2][sum] = $scope.dados[i].data.ur2m;
        }
        if (array[3]) {
          $scope.data[3][sum] = $scope.dados[i].data.prec;
        }
        if (array[4]) {
          $scope.data[4][sum] = $scope.dados[i].data.v10m;
        }
        sum++;

      }
    }
  }

  $ionicModal.fromTemplateUrl('image-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function () {
    $scope.modal.show();
  };

  $scope.closeModal = function () {
    $scope.arrayGraph = [true, false, false, false, false];
    $scope.data = createArray(5, 12);
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hide', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });
  $scope.$on('modal.shown', function () {
    console.log('Modal is shown!');
  });



});