angular.module('DeNieuweRekening')

    .controller('PersonalController', ['$scope', '$http', function ($scope) {
    	$http.get('/getPersonal').
	    	success(function(data){
	    		console.log(data);
	    	}).
	    	error(function(data, status){
	    		console.log(data, status);
	    	});
    }]);