angular.module("firstApp")
	.controller("homeController", homeController);

	function homeController($scope, $http, $rootScope, userService){
		$scope.currency = userService.sum;
		$("ul.nav li").removeClass("active");
		$("ul.nav li#home").addClass("active");
		$rootScope.name="vamshi";
		$scope.firstname = "Vamshi";
		$http.get("http://localhost:8000/controllers/test.json")
			.then(function(response){
				if(response.status==200){
					console.log(response.data)
				}
			})
		//login start
		//goes to facebook
		//authenticated by facebook
		//tokenReceived
		$rootScope.$broadcast("dataReceived", $scope.userData);

		//as soon as data received - 
		$rootScope.$on("dataReceived", function(args){
			$scope.userData  =args;

		})			
		console.log("I am in home controller");
	}

	// Status - 200, 404, 500, 403, 301