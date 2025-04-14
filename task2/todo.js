"use strict";
// Todo list array
let todoList = [];
let currentId = 1;
// Add a new todo
function addTodo(task) {
    const newTodo = {
        id: currentId++,
        task,
        completed: false,
    };
    todoList.push(newTodo);
    console.log(`Added: "${task}"`);
}
// Remove a todo by ID
function removeTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    console.log(`Removed task with ID: ${id}`);
}
// Edit a todo task
function editTodo(id, newTask) {
    const todo = todoList.find(todo => todo.id === id);
    if (todo) {
        todo.task = newTask;
        console.log(`Edited task ID ${id} to: "${newTask}"`);
    }
    else {
        console.log(`Task with ID ${id} not found.`);
    }
}
// Display todos
function displayTodos() {
    console.log("\nYour Todo List:");
    todoList.forEach(todo => {
        console.log(`[${todo.completed ? "x" : " "}] ${todo.id}: ${todo.task}`);
    });
}
// Mark as completed
function completeTodo(id) {
    const todo = todoList.find(todo => todo.id === id);
    if (todo) {
        todo.completed = true;
        console.log(`Marked task ID ${id} as completed.`);
    }
    else {
        console.log(`Task with ID ${id} not found.`);
    }
}
// Example usage
addTodo("Learn TypeScript");
addTodo("Build a Todo App");
editTodo(1, "Learn TypeScript basics");
completeTodo(1);
removeTodo(2);
displayTodos();
