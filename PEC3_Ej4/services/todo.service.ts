import { Todo } from "../models/todo.model";
import * as fs from 'fs';

export class TodoService {
  todos: Todo[];
  onTodoListChanged!: Function;
  filePath: string = './todos.json'; 

  constructor() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      this.todos = JSON.parse(data).map((todo: any) => new Todo(todo));
    } catch (error) {
      this.todos = [];
    }
  }

  bindTodoListChanged(callback: Function) {
    this.onTodoListChanged = callback;
  }

  _commit(todos: Todo[]) {
    this.onTodoListChanged(todos);
    fs.writeFileSync(this.filePath, JSON.stringify(todos), 'utf-8');
  }

  addTodo(text: string): void {
    this.todos.push(new Todo({ text: text, complete: false }));
    this._commit(this.todos);
  }

  editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id
        ? new Todo({
            ...todo,
            text: updatedText
          })
        : todo
    );

    this._commit(this.todos);
  }

  deleteTodo(_id: string): void {
    this.todos = this.todos.filter(({ id }) => id !== _id);
    this._commit(this.todos);
  }

  toggleTodo(_id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === _id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}
