angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', 'deelnemers', function ($scope, deelnemers) {
    	$scope.deelnemers = deelnemers;
    	console.log("deelnemers: " + $scope.deelnemers);

    }]);