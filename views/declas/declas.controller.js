angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/declas').
    		success(function(data){
    			$scope.deelnemers = data;
    			console.log($scope.deelnemers);
    		}).
    		error(function(data, status){
    			console.log('error: ', data, status);
    		});
    	/*$scope.deelnemers = deelnemers;
    	console.log("deelnemers: " + $scope.deelnemers);

    	$scope.deelnemers = deelnemers;
    	*/
 
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