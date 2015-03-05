angular.module('DeNieuweRekening', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/welkom/welkom.html'
        })
        .when('/turven', {
        	templateUrl: '/views/turven/turven.html'
        })
        .when('/statistieken', {
        	templateUrl: '/views/statistieken/statistieken.html'
        })
        .when('/declas', {
        	templateUrl: '/views/declas/declas.html',
            controller: 'DeclasController'
        })
        .when('/eetlijst', {
        	templateUrl: '/views/eetlijst/eetlijst.html'
        })
        .when('/invoer', {
        	templateUrl: '/views/invoer/invoer.html'
        })
        .when('/admin', {
        	templateUrl: '/views/admin/admin.html'
        })
        .when('/personal', {
        	templateUrl: '/views/personal/personal.html',
            controller: 'PersonalController'
        })
        .when('/rekening', {
        	templateUrl: '/views/rekening/rekening.html'
        })
        .when('/create_account', {
            templateUrl: '/views/create_account/create_account.html',
            controller: 'CreateAccountController'
        })
        .when('/huis_aanmaken', {
            templateUrl: '/views/huis_aanmaken/huis_aanmaken.html',
            controller: 'HuisAanmakenController'
        })
        .otherwise({
        	redirectTo: '/'
        });
    }]);
angular.module('DeNieuweRekening')

    .controller('CreateAccountController', ['$scope', function ($scope) {
        $scope.account = [];
    }]);
angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', function ($scope) {
        $scope.name = 'Jan Cees';
    }]);
angular.module('DeNieuweRekening')

    .controller('HuisAanmakenController', ['$scope', function ($scope) {
        $scope.account = [];
    }]);
angular.module('DeNieuweRekening')

    .controller('PersonalController', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/personal').
	    	success(function(data){
	    		console.log('succes:', data);
	    	}).
	    	error(function(data, status){
	    		console.log(data, status);
	    	});
    }]);
