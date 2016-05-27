(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function(){
		this.item = {};

		this.items =[];

		this.addItem = function() {
			this.items.push(this.item);
			this.item.title= "";
			this.item.description= "";
			console.log("ya dun clicked");
			console.log(this.items.length);
		};

		console.log(this.items);

	});

})();