angular.module("firstApp")
	.controller("contactController", contactController);

	function contactController($scope, $stateParams){
		$scope.id = $stateParams.contactId;
		$("ul.nav li").removeClass("active");
		$("ul.nav li#contact").addClass("active");
		$scope.names = ["vamshi","krishna","reddy","angular","mac"];
		console.log("I am in contact controller");
	}