var calculator = angular.module('calculator', ['ngMessages', 'waitstaffFilters']);

calculator.controller('myController', ['$scope', function($scope){

	$scope.base = '';
	$scope.tax = '';
	$scope.tip = '';
	$scope.taxed = '';
	$scope.tipped = '';
	$scope.mealCount = 0;
	$scope.tipDisplay = 0;
	$scope.tipTotal = 0;
	$scope.tipAverage = 0;

	$scope.clear = function() {
		$scope.baseIn = '';
		$scope.taxIn = '';
		$scope.tipIn = '';
		$scope.base = '';
		$scope.tax = '';
		$scope.tip = '';
		$scope.tipped = '';
		$scope.taxed = '';
		$scope.tipDisplay = '';
	}


	$scope.reset = function() {
		clear();  
		$scope.mealCount = 0;
		$scope.tipTotal = 0;
		$scope.tipAverage = 0;
	}

	$scope.toZero = function() {
		$scope.baseIn = '';
		$scope.tipIn = '';
		$scope.taxIn = '';
	}

		var base = '';
		var tip = '';
		var tax = '';



	$scope.submit =function() {
		base = $scope.baseIn;
		tip = $scope.tipIn;
		tax = $scope.taxIn;
		$scope.base = base;
		$scope.tax = '.' + tax;
		$scope.tip = '.' + tip;
		$scope.tipDisplay = tip;
		$scope.taxed = $scope.base + ($scope.base * $scope.tax);
		$scope.tipped = $scope.taxed + ($scope.taxed * $scope.tip);
		$scope.mealCount += 1;
		$scope.tipFinal = $scope.tipped - $scope.taxed;
		$scope.tipTotal +=  $scope.tipFinal;
		$scope.tipAverage = $scope.tipTotal / $scope.mealCount;
		$scope.toZero();
	};



}])

var filters = angular.module('waitstaffFilters', []);

filters.filter('percent', function() {
		return function(input) {
		return input + "%";
	};
	
});