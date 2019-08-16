import { Todo } from './todo';

export class App {

  todos:Todo[] = [];
  newItem:string = "";
  constructor() {
    this.todos.push(
      new Todo("Walk the Dog", false, "First Todo"),
      new Todo("Clean the Room", true, "Second Todo"),
      new Todo("Go to School", false, "Third Todo"),
      new Todo("ASD", false, "Fourth Todo"),
    )
    console.log(this.newItem)
    }

}
