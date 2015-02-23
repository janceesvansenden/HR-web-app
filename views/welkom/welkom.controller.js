'use strict';

angular.module('app')
	.controller('WelkomCtrl', function($scope) {
		$scope.names = ["Bart Keulen",
						"Jan Cees"
					   ];
	});