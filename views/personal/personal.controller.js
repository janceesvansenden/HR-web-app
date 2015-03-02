angular.module('DeNieuweRekening')

    .controller('PersonalController', ['$scope', '$http', function ($scope) {
    	$http({method: 'GET', url:'/personal'}).
	    	success(function(data){
	    		console.log(data);
	    	}).
	    	error(function(data, status){
	    		console.log(data, status);
	    	});
    }]);