"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_model_1 = require("../models/todo.model");
const fs = require("fs");
class TodoService {
    constructor() {
        this.filePath = './todos.json';
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.todos = JSON.parse(data).map((todo) => new todo_model_1.Todo(todo));
        }
        catch (error) {
            this.todos = [];
        }
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        fs.writeFileSync(this.filePath, JSON.stringify(todos), 'utf-8');
    }
    addTodo(text) {
        this.todos.push(new todo_model_1.Todo({ text: text, complete: false }));
        this._commit(this.todos);
    }
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id
            ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), { text: updatedText }))
            : todo);
        this._commit(this.todos);
    }
    deleteTodo(_id) {
        this.todos = this.todos.filter(({ id }) => id !== _id);
        this._commit(this.todos);
    }
    toggleTodo(_id) {
        this.todos = this.todos.map(todo => todo.id === _id ? new todo_model_1.Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
}
exports.TodoService = TodoService;
