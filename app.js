(function(){
	var app = angular.module('toDo', []);

	app.controller('ToDoController', function(){
		this.items = tasks;
	});


	var tasks = [
		{
			title: "Wash floor",
			description: "Wash the bedroom floor"
		},
		{
			title: "iron clothes",
			description: "iron dress clothes for work"
		}
	];




})();