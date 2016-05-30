(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){

		$scope.todos =[
			{text: 'Learn AngularJS',  done:false},
			{text:'Build an app', done: false}
		];

		$scope.totalTodos = $scope.todos.length;

		$scope.addTodo = function() {
			$scope.todos.push({text:$scope.formTodoText, done: false})
		};

	});

})();