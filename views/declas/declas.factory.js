angular.module('DeNieuweRekening')

	.factory('deelnemers', function() {
		return deelnemers = [
			{ id: 1, name: 'Bart', kosten: '0.00', value: 1 },
			{ id: 2, name: 'Jan Cees', kosten: '0.00', value: 1 },
			{ id: 3, name: 'Henk', kosten: '0.00', value: 1 },
			{ id: 4, name: 'Frits', kosten: '0.00', value: 1 }
		];
	});