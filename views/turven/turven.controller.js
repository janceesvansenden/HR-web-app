angular.module('DeNieuweRekening')
        
    .controller('TurvenController', ['$scope', 'Huisgenoten', 'Turfartikelen', function($scope, Huisgenoten, Turfartikelen) {
      $scope.huisgenoten = Huisgenoten;
      $scope.turfartikelen = Turfartikelen;

      // Change sign for turven
      $scope.turfsign = 1;
      $scope.turfmin = function() {
        $scope.turfsign *= -1;
      }

      // Add function for huisgenoten en turfartikelen
      $scope.add = function(wat,index) {
        if ($scope.turfsign == -1 && wat[index] == 0) {
          $scope.turfsign = 1;
          return;
        } else {
          wat[index].value += $scope.turfsign;
        }
        $scope.turfsign = 1;
      }

      // Add one for huisgenoot
      $scope.addHuis = function(index) {
        $scope.add($scope.huisgenoten,index);
      };

      // Add on for turfartikel
      $scope.addTurf = function(index) {
        $scope.add($scope.turfartikelen,index);
      };

      // Reset all
      $scope.reset = function() {
        for ( i in $scope.huisgenoten ) {
          $scope.huisgenoten[i].value = 0;
        }
        for ( i in $scope.turfartikelen ) {
          $scope.turfartikelen[i].value = 0;
        }
      };

      // Turven
      $scope.turven = function() {



        // Reset all after turven
        $scope.reset();
      }
    }])






    .factory('Huisgenoten', function() {
    	return [
			{ name: "Bart", value: 0 },
			{ name: "Jan Cees", value: 0 },
			{ name: "Peta", value: 0 },
			{ name: "Piet", value: 0 },
			{ name: "Henk", value: 0 }
		 ];
    })

    .factory('Turfartikelen', function() {
    	return [
    		{ name: "Pils", value: 0 },
    		{ name: "Fris", value: 0 },
    		{ name: "Twix", value: 0 },
    		{ name: "Mars", value: 0 },
    		{ name: "Cup a Soup", value: 0 },
    		{ name: "Chips", value: 0 },
    		{ name: "Noodles", value: 0 }
    	];
    })
