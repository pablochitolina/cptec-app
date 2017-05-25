app.controller('AppCtrl', function ($scope,$state, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal


    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        console.log("novo");
        $state.go('app.map');
    });


});