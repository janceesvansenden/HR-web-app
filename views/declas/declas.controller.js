angular.module('DeNieuweRekening')

    .controller('DeclasController', ['$scope', '$http', function ($scope, $http) {
        $scope.deelnemers = [];

        $http.get('/declas').
            success(function(data){
                $scope.deelnemers = data;
                console.log($scope.deelnemers);
            }).
            error(function(data, status){
                console.log('error: ', data, status);
            });
 
 
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

        $scope.test = function() {
            var ptot = 0;
            for (i in $scope.deelnemers ) {
                ptot += $scope.deelnemers[i].value;
            };
            
            console.log(ptot);
            console.log($scope.deelnemers[0].value);
        };
    }]);