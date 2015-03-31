angular.module('DeNieuweRekening', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '/views/welkom/welkom.html'
        })
        .when('/turven', {
        	templateUrl: '/views/turven/turven.html',
            controller: 'TurvenController'
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
        	templateUrl: '/views/admin/admin.html',
            controller: 'AdminController'
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
angular.module('DeNieuweRekening')

    .controller('CreateAccountController', ['$scope', function ($scope) {
        $scope.account = [];
    }]);
angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', 'deelnemers', function ($scope, deelnemers) {
    	$scope.deelnemers = deelnemers;
        $scope.value = "1";
        $scope.displayStyle = {display : 'none'};
 
    	$scope.addOne = function(index) {
    		$scope.deelnemers[index].value += 1;
    	};
 
    	$scope.minOne = function(index) {
    		if ( $scope.deelnemers[index].value > 0)
    			$scope.deelnemers[index].value -= 1;
	   	};

    	$scope.change = function(value) {
            for ( i in $scope.deelnemers )
                $scope.deelnemers[i].value = parseInt(value);
            $scope.displayStyle = {display : 'none'};
            if ( value == 0 ) 
                $scope.displayStyle = {display : 'inline'};
        };

        var ptot = 0;
        for (i in $scope.deelnemers ) {
            ptot += $scope.deelnemers[i].value;
        };

        $scope.test = function() {
            console.log(ptot);
            console.log($scope.deelnemers[1].value;);
        };
    }]);
angular.module('DeNieuweRekening')

    .controller('HuisAanmakenController', ['$scope', function ($scope) {
        $scope.account = [];
    }]);
angular.module('DeNieuweRekening')

    .controller('PersonalController', ['$scope', '$http', function ($scope, $http) {
    	$http.get('/personal').
	    	success(function(data){
	    		//console.log('succes: ', data);
	    		$scope.personal = data;
	    		console.log($scope.personal);
	    	}).
	    	error(function(data, status){
	    		console.log('error: ',data, status);
	    	});
    }]);
angular.module('DeNieuweRekening')
        
    .controller('TurvenController', ['$scope', 'Huisgenoten', 'Turfartikelen', function($scope, Huisgenoten, Turfartikelen) {
      $scope.huisgenoten = Huisgenoten;
      $scope.turfartikelen = Turfartikelen;

      var width;
      var columnWidth = $('.huisgenoten-turven').width();

      if (window.innerWidth <= 1024 ) {
        width = Math.floor(columnWidth/3) - 8;
      } else {
        width = Math.floor(columnWidth/4) - 10;
      };
     
      
      $scope.huisgenootStyle = {
      	'width': width + "px",
      	'height': width + "px"
      }
      

      $scope.turfStyle = {
      	'width': width + "px",
      	'height': width + "px"      	
      }
    }])

    .factory('Huisgenoten', function() {
    	return [
			{ name: "Bart" },
			{ name: "Jan Cees" },
			{ name: "Peta" },
			{ name: "Piet" },
			{ name: "Henk" }
		 ];
    })

    .factory('Turfartikelen', function() {
    	return [
    		{ name: "Pils" },
    		{ name: "Fris" },
    		{ name: "Twix" },
    		{ name: "Mars" },
    		{ name: "Cup a Soup" },
    		{ name: "Chips" },
    		{ name: "Noodles" }
    	];
    })


angular.module('DeNieuweRekening')

	.factory('deelnemers', function() {
		return deelnemers = [
			{ id: 1, name: 'Bart', kosten: '0.00', value: 1 },
			{ id: 2, name: 'Jan Cees', kosten: '0.00', value: 1 },
			{ id: 3, name: 'Henk', kosten: '0.00', value: 1 },
			{ id: 4, name: 'Frits', kosten: '0.00', value: 1 }
		];
	});