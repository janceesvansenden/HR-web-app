angular.module('DeNieuweRekening', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
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
        	templateUrl: '/views/declas/declas.html'
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
        	templateUrl: '/views/personal/personal.html'
        })
        .when('/rekening', {
        	templateUrl: '/views/rekening/rekening.html'
        })
        .otherwise({
        	redirectTo: '/'
        });
    }]);