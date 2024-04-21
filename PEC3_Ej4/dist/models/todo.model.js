"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const uuid_1 = require("uuid");
class Todo {
    constructor({ text, complete } = { text: '', complete: false }) {
        this.id = (0, uuid_1.v4)();
        this.text = text;
        this.complete = complete;
    }
}
exports.Todo = Todo;
