angular.module('DeNieuweRekening')
        
    .controller('TurvenController', ['$scope', 'Huisgenoten', 'Turfartikelen', function($scope, Huisgenoten, Turfartikelen) {
      $scope.huisgenoten = Huisgenoten;
      $scope.turfartikelen = Turfartikelen;

      $scope.addHuis = function(index) {
        $scope.huisgenoten[index].value += 1;
        console.log($scope.huisgenoten[index].value);
      };

      $scope.addTurf = function(index) {
        $scope.turfartikelen[index].value += 1;
      };

      $scope.turven = function() {

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
