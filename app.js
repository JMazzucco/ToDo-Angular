(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function($scope){

		$scope.todos =[
			{text: 'Learn AngularJS',  done:false},
			{text:'Build an app', done: false}
		];

		$scope.totalTodos = $scope.todos.length;

		$scope.clearCompleted = function() {
			$scope.todos = _.filter($scope.todos, function(todo) {
				return !todo.done;
			})
		};

		$scope.addTodo = function() {
			$scope.todos.push({text:$scope.formTodoText, done: false})
		};



	});

})();