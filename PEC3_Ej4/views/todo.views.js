"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
const jsdom_1 = require("jsdom");
/**
 * @class View
 *
 * Visual representation of the model.
 */
class TodoView {
    constructor() {
        const { window } = new jsdom_1.JSDOM();
        const document = window.document;
        this.app = window.this.getElement("#root");
        this.form = window.document.createElement("form");
        this.input = window.document.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = document.createElement("button");
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = document.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);
        this._temporaryTodoText = "";
        this._initLocalListeners();
    }
    get _todoText() {
        return this.input.value;
    }
    _resetInput() {
        this.input.value = "";
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            const p = document.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        }
        else {
            // Create nodes
            todos.forEach(todo => {
                const li = document.createElement("li");
                li.id = todo.id;
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;
                const span = document.createElement("span");
                span.contentEditable = "true";
                span.classList.add("editable");
                if (todo.complete) {
                    const strike = document.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text;
                }
                const deleteButton = this.createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);
                // Append nodes
                this.todoList.append(li);
            });
        }
        // Debugging
        console.log(todos);
    }
    _initLocalListeners() {
        this.todoList.addEventListener("input", (event) => {
            if (event.target.className === "editable") {
                this._temporaryTodoText = event.target.innerText;
            }
        });
    }
    bindAddTodo(handler) {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }
    bindDeleteTodo(handler) {
        this.todoList.addEventListener("click", (event) => {
            if (event.target.className === "delete") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }
    bindEditTodo(handler) {
        this.todoList.addEventListener("focusout", (event) => {
            if (this._temporaryTodoText) {
                const id = event.target.parentElement.id;
                handler(id, this._temporaryTodoText);
                this._temporaryTodoText = "";
            }
        });
    }
    bindToggleTodo(handler) {
        this.todoList.addEventListener("change", (event) => {
            if (event.target.type === "checkbox") {
                const id = event.target.parentElement.id;
                handler(id);
            }
        });
    }
}
exports.TodoView = TodoView;
