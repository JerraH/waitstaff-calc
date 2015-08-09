var calculator = angular.module('calculator', [ 'waitstaffFilters']);

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
	$scope.baseIn = '';
	$scope.tipIn = '';
	$scope.taxIn = '';

	$scope.clear = function() {
		$scope.baseIn = '';
		$scope.taxIn = '';
		$scope.tipIn = '';
		$scope.base = '';
		$scope.tax = '';
		$scope.tip = '';
		$scope.tipped = '';
		$scope.taxed = '';
		$scope.tipDisplay = 0;
	};


	$scope.reset = function() {
		$scope.clear();  
		$scope.mealCount = 0;
		$scope.tipTotal = 0;
		$scope.tipAverage = 0;
	};

	$scope.toZero = function() {
		$scope.baseIn = '';
		$scope.tipIn = '';
		$scope.taxIn = '';
	};

		var submittedEver = false;


		


	$scope.submit =function() {
		console.log($scope.calculateMe.price.$invalid);
		$scope.calculateMe.submitted = false;
	if($scope.calculateMe.$valid) {
		submittedEver = true;
		$scope.mealCount += 1;
		$scope.base = $scope.baseIn;
		$scope.tip = $scope.tipIn;
		$scope.tax = $scope.taxIn;
		$scope.taxDec = ($scope.tax / 100) + 1;
		$scope.tipDec = ($scope.tip / 100) + 1;
		$scope.tipDisplay = $scope.tip;
		$scope.taxed = $scope.base * $scope.taxDec;
		$scope.tipped = $scope.taxed * $scope.tipDec;
		$scope.tipFinal = ($scope.tipped - $scope.taxed);
		$scope.tipTotal = $scope.tipTotal + $scope.tipFinal;
		$scope.tipAverage = ($scope.tipTotal / $scope.mealCount);
		console.log($scope.tipped);
		console.log($scope.taxed);
		console.log($scope.tipFinal);
		console.log($scope.tipTotal);
		console.log($scope.tipAverage);
		$scope.toZero();
		$scope.calculateMe.submitted = false;
		}
		else {
			$scope.calculateMe.submitted = true;
		};
};



}]); //controller

var filters = angular.module('waitstaffFilters', []);

filters.filter('percent', function() {
		return function(input) {
		return input + "%";
	};
	
});