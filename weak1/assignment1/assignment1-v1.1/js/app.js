(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputArray = "";
  $scope.html = "";
  $scope.style = "";
  $scope.message = "We don't consider empty items!!!";

  $scope.checkInput = function() {
  	var splitInputArray = $scope.inputArray.split(',');
  	var numberOfEmptyStrings = 0;
  	for (var i = 0; i < splitInputArray.length; i++) {
  		if(splitInputArray[i] === "" || splitInputArray[i] === " " || splitInputArray[i] === "  " || splitInputArray[i] === "   "){
  			numberOfEmptyStrings++;
  		};
	};
  	//console.log(numberOfEmptyStrings);
  	if((splitInputArray.length - numberOfEmptyStrings) > 3){  			
	  		$scope.style = "color:green;border:solid 1px green;";
	  		$scope.output = "Too much!";	  		
	};
	if((splitInputArray.length - numberOfEmptyStrings) < 4 ){
		var checkIfAllEmpty = true;
	  	for (var i = 0; i < splitInputArray.length; i++) {
	  		if(splitInputArray[i]){
	  			checkIfAllEmpty = false;
	  		};
		};	
	  	if(checkIfAllEmpty){
	  		$scope.style = "color:red;border:1px solid red;";
	  		$scope.output = "Please enter data first"; 
	  		
	  		
	  	}else{
	  		$scope.style = "color:green;border:1px solid green;";
	  		$scope.output = "Enjoy!";
	  		
	  	};

	  	
	};		
	
  };

  
}

})();
