/* setup your angular app here */

angular.module('App', [])
.controller('AppController', ['$scope', function($scope){

	$scope.fruits = [];
	$scope.vegetables = [];
	$scope.choices = fruits.concat(vegetables);

	// RANDOMIZE CHOICES LIST
	$scope.shuffleRandom = function(arr) {
		var shuffled = [];
			for (var i = 0; i < arr.length ; i++) {
				shuffled.push(arr.splice(Math.floor(Math.random()*arr.length), 1));
			}
		return shuffled;
	};

	// MOVE FROM CHOICES TO FRUITS
	$scope.choicesToFruits = function(index) {
		$scope.fruits.push($scope.choices.splice(index, 1)[0]);
	};

	// MOVE FROM FRUITS TO CHOICES
	$scope.fruitsToChoices = function(index) {
		$scope.choices.push($scope.fruits.splice(index, 1)[0]);
	};

	// MOVE FROM CHOICES TO VEGETABLES
	$scope.choicesToVegetables = function(index) {
		$scope.vegetables.push($scope.choices.splice(index, 1)[0]);
	};

	// MOVE FROM VEGETABLES TO CHOICES
	$scope.vegetablesToChoices = function(index) {
		$scope.choices.push($scope.vegetables.splice(index, 1)[0]);
	};

	// CHECK IF FRUIT
	$scope.inFruits = function(index){
		if (fruits.indexOf($scope.fruits[index]) >= 0) {
			return true;
		} 
		else {
			return false;
		}
	};

	// CHECK IF VEGGIE
	$scope.inVegetables = function(index){
		if (vegetables.indexOf($scope.vegetables[index]) >= 0) {
			return true;
		} 
		else {
			return false;
		}
	};

	// CHECK IF ALL CHOICES CORRECT
	$scope.allCorrect = function() {
		var correct = true;
		$scope.fruits.forEach(function(fruit) {
			if (vegetables.indexOf(fruit) >= 0) {
				correct = false;
			} 
		});
		$scope.vegetables.forEach(function(vegetable) {
			if (fruits.indexOf(vegetable) >= 0) {
				correct = false;
			} 
		});
		return correct;
	};

	// RANDOMIZE FRUITS AND VEGETABLES
	$scope.shuffleRandom($scope.choices);

}]);

// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
