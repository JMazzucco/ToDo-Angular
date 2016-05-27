(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function(){
		this.item = {};

		this.items =[];

		this.addItem = function() {
			this.items.push(this.item);
			this.item = {};
		};

	});

})();