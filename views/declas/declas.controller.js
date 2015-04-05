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