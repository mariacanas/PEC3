import { v4 as uuidv4 } from 'uuid';

export class Todo {
  id: string;
  text: string;
  complete: boolean;

  constructor({ text, complete }: {text:string,complete:boolean} = { text: '', complete: false }) {
    this.id = uuidv4();
    this.text = text;
    this.complete = complete;
  }
}

