angular.module('DeNieuweRekening')
        
    .controller('TurvenController', ['$scope', 'Huisgenoten', 'Turfartikelen', function($scope, Huisgenoten, Turfartikelen) {
      $scope.huisgenoten = Huisgenoten;
      $scope.turfartikelen = Turfartikelen;

      var width = Math.floor($('.huisgenoten-turven').width()/4) - 5;
      
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
