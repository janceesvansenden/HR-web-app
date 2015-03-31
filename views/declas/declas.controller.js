angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', 'deelnemers', function ($scope, deelnemers) {
    	$scope.deelnemers = deelnemers;

    	$scope.addOne = function(index) {
    		$scope.deelnemers[index].value += 1;
    	};

    	$scope.minOne = function(index) {
    		if ( $scope.deelnemers[index].value > 0)
    			$scope.deelnemers[index].value -= 1;
    	};

    	$scope.change = function(iedereen) {
    		for ( deelnemer in $scope.deelnemers ) {
    			deelnemer.value = iedereen;
    		}
    	};
    }]);