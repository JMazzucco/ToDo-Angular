(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){
		$scope.item = {};

		$scope.todos =[
			{text: 'Learn AngularJS',  done:false},
			{text:'Build an app', done: false}
		];

		$scope.totalTodos = $scope.todos.length;

		$scope.addItem = function() {
			$scope.items.push($scope.item);
			$scope.item = {};
		};

    // remove an item
    $scope.remove = function(index) {
    	$scope.items.splice(index, 1);
    };

	});

})();