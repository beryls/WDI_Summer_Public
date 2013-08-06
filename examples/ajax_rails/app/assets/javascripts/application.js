// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// STEP 11: Make a function that takes a task JavaScript object as an argument
// This function will generate a DOM version of the task javasctipt object it takes as an argument
var appendTask = function(task){
	// Created local variables that hold the jQuery selectors for:
	//     completeButton, deleteButton, actions, taskText, htmlTask
	// Note the classes on these
	var completeButton = $('<button class="complete">complete</button>');
	var restoreButton = $('<button class="restore">restore</button>');
	var deleteButton = $('<button class="delete">delete</button>');
	if (task.completed === false){
		var actions = $('<div class="actions"></div>').append(completeButton).append(deleteButton);
	} else {
		var actions = $('<div class="actions"></div>').append(restoreButton).append(deleteButton);
	}

	// STEP 12: Setup a jquery DOM representation of the task object
	var taskText = $('<div class="items">'+task.name+'</div>').append(actions);
	var htmlTask = $('<li></li>').append(taskText);

	// Add event handlers to the new button elements


	// STEP 15: Note `.click()` event handlers to the `complete` and  `delete` buttons that will later make ajax requests to the server - but don't fill it out yet

	// Handles the click event on the complete button using Ajax
	completeButton.click(function(){
		$.ajax({
			url: "/complete/" + task.id, type: "put", dataType: "script"
			// STEP 24: Make the step 15 `.click()` make an ajax call to the `complete` action and set the `dataType` setting to `script`
		})
	});

	restoreButton.click(function(){
		$.ajax({
			url: "/restore/" + task.id, type: "put", dataType: "script"
		})
	});

	// Handles the click event on the delete button using Ajax
	deleteButton.click(function(){
		$.ajax({
			url: "/destroy/" + task.id, type: "delete", dataType: "script"
			// Step 30: Make the step 15 `deleteButton.click()` make an ajax call to the `TasksController#destroy` action and set the `dataType` setting to `script`
		})
	});

	// STEP 13: Set the htmlTask elements `data-id` attribute to the tasks id
	// to make them easy to find for the DOM manipulating ajax response functions
	// Do this just below here:
	htmlTask.attr("data-id", task.id);

	// STEP 14: Append htmlTask either to the `#todo-items` list or the `#completed-items` list
	// but don't allow empty tasks
	if (task.name.length !== 0) {
		if (task.completed === false){
			$('#todo-items').append(htmlTask);
		} else {
			$('#completed-items').append(htmlTask);
		}
	}
}

// This runs when the window is loaded
// Similar to window.onload, but for jQuery
$(function(){

	// STEP 9: When the DOM is ready make an ajax call to the index action with a `dataType` setting of 'json'
	// Send an AJAX json request to the index action to get all the tasks
	$.ajax({ url: "/", type: "get", dataType: "json"
	}).done(function(data){ //handle the json response
			// console.log(data);
			// STEP 10: For now use `console.log` in `.done()` to see the result is an array of javascript objects.
			for (i = 0; i < data.length; i++){
				console.log(data[i]);
				appendTask(data[i]);
			}
			// STEP 16: Rewrite the `.done()` method in step 10 so that it loops through the elements in the ajax response object and passes each to the new append task function
	});

	// Add a click event handler to the add item button
	$('#add-item').click(function(){
		var inputValue = $("#new-task-field").val();
		var task = { "name": inputValue };
		// STEP 17: Make a javascript JSON object `task` that will have a `name` attribute
		// We'll use this object to send data to the server
		// STEP 18: Set the name attribute to the value of the text in the `input` field

		// Don't save tasks with no name
		if (task.name.length!==0){
			$.ajax({ url: "/create", type: "post", dataType: "json", data: task
				// STEP 19: Make this click event send a json object to the `create` action using AJAX
			}).done(function(data){ // Handle the json response
				// console.log(data);
				// STEP 20: Use the method `console.log` on the result to see that it will return a JavaScript task object after the next steps.
				appendTask(data);
				$("#new-task-field").val("");
				// STEP 23: Rewrite `.done()` method from step 20 to send the response object to the append task function
			});
		}
	});
});


