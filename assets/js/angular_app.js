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

    .controller('DeclasController', ['$scope', '$http', function ($scope, $http) {
        // Get deelnemers out of database
        $scope.deelnemers = [];
        $http.get('/declas').
            success(function(data){
                $scope.deelnemers = data;
                console.log($scope.deelnemers);
            }).
            error(function(data, status){
                console.log('error: ', data, status);
            });

        // Function for plus one button deelnemer
        $scope.addOne = function(index) {
            $scope.deelnemers[index].value += 1;
        };
 
        // Function for minus one button deelnemer
        $scope.minOne = function(index) {
            if ( $scope.deelnemers[index].value > 0)
                $scope.deelnemers[index].value -= 1;
        };

        // Show/hide deelnemers if radiobutton is pressed
        // Set initial values
        $scope.value = "1";
        $scope.displayStyle = {display : 'none'};
        $scope.change = function(value) {
            for ( i in $scope.deelnemers )
                $scope.deelnemers[i].value = parseInt(value);
            $scope.displayStyle = {display : 'none'};
            if ( value == 0 ) 
                $scope.displayStyle = {display : 'inline'};
        };

        // Update kosten per person
        $scope.update = function() {
            var ptot = 0;
            for (i in $scope.deelnemers ) {
                ptot += $scope.deelnemers[i].value;
            };

            for (i in $scope.deelnemers) {
                if (!$scope.totbedrag || ptot == 0) 
                    $scope.deelnemers[i].kosten = 0;
                else
                    $scope.deelnemers[i].kosten = $scope.totbedrag*$scope.deelnemers[i].value/ptot;
            };
        };

        // Add decla to database
        $scope.toevoegen = function() {
            
        }

        // Watch for changes, if so run update()
        $scope.$watch(function(scope) { return $scope.update() },
                      function(scope) {});
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

