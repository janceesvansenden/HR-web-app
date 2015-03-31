angular.module('DeNieuweRekening')

    .controller('AdminController', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/admin').
	    	success(function(data){
	    		//console.log('succes: ', data);
	    		$scope.admin = data;
	    		console.log($scope.admin);
	    	}).
	    	error(function(data, status){
	    		console.log('error: ',data, status);
	    	});
    }]);