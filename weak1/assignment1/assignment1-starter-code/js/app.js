(function () {
'use strict';

angular.module('LunchCheck', ['ngSanitize'])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$sce'];
function LunchCheckController($scope,$sce) {
  $scope.inputArray = "";
  $scope.html = "";
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
	  		$scope.html = '<span style="color:green;border:solid 2px green;">Too much!</span>';
	  		
	};
	if((splitInputArray.length - numberOfEmptyStrings) < 4 ){
		var checkIfAllEmpty = true;
	  	for (var i = 0; i < splitInputArray.length; i++) {
	  		if(splitInputArray[i]){
	  			checkIfAllEmpty = false;
	  		};
		};	
	  	if(checkIfAllEmpty){
	  		$scope.html = '<span style="color:red;border:1px solid red;">Please enter data first</span>'; 
	  		
	  		
	  	}else{
	  		$scope.html = '<span style="color:green;border:1px solid green;">Enjoy!</span>';
	  		
	  	};

	  	
	};
	//console.log(splitInputArray);
	//$scope.coloredOutput = $interpolate('<font color ="red">{{output}}</font>')($scope);
	$scope.htmlFunc = function(){
		return $sce.trustAsHtml($scope.html);	
	}
	
  };

  
}

})();
