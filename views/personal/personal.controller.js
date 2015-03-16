angular.module('DeNieuweRekening')

    .controller('PersonalController', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/personal').
	    	success(function(data){
	    		console.log('succes: ', data);
	    	}).
	    	error(function(data, status){
	    		console.log('error: ',data, status);
	    	});
    }]);