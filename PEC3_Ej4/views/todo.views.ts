import {Todo} from "./../models/todo.model"

export class TodoView {
    app: HTMLElement;
    form: HTMLElement;
    input: HTMLInputElement;
    submitButton: HTMLElement;
    title: HTMLElement;
    todoList: HTMLElement;
    _temporaryTodoText: string;

    constructor() {
      this.app = this.getElement("#root");
      this.form = this.createElement("form", "");
      this.input = (<HTMLInputElement>this.createElement("input", ""));
      this.input.type = "text";
      this.input.placeholder = "Add todo";
      this.input.name = "todo";
      this.submitButton = this.createElement("button", "");
      this.submitButton.textContent = "Submit";
      this.form.append(this.input, this.submitButton);
      this.title = this.createElement("h1", "");
      this.title.textContent = "Todos";
      this.todoList = this.createElement("ul", "todo-list");
      this.app.append(this.title, this.form, this.todoList);
  
      this._temporaryTodoText = "";
      this._initLocalListeners();
    }
  
    get _todoText(): string {
      return this.input.value;
    }
  
    _resetInput(): void {
      this.input.value = "";
    }
  
    createElement(tag: string, className: string): HTMLElement {
      const element: HTMLElement = document.createElement(tag);
  
      if (className) element.classList.add(className);
  
      return element;
    }
  
    getElement(selector: string): HTMLElement {
      const element: HTMLElement = document.querySelector(selector);
  
      return element;
    }
  
    displayTodos(todos: Todo[]):void {
      // Delete all nodes
      while (this.todoList.firstChild) {
        this.todoList.removeChild(this.todoList.firstChild);
      }
  
      // Show default message
      if (todos.length === 0) {
        const p: HTMLElement = this.createElement("p", "");
        p.textContent = "Nothing to do! Add a task?";
        this.todoList.append(p);
      } else {
        // Create nodes
        todos.forEach(todo => {
          const li: HTMLElement = this.createElement("li", "");
          li.id = todo.id;
  
          const checkbox: HTMLInputElement = (<HTMLInputElement>this.createElement("input", ""));
          checkbox.type = "checkbox";
          checkbox.checked = todo.complete;
  
          const span: HTMLSpanElement = (<HTMLSpanElement>this.createElement("span", ""));
          span.contentEditable = 'true';
          span.classList.add("editable");
  
          if (todo.complete) {
            const strike = this.createElement("s", "");
            strike.textContent = todo.text;
            span.append(strike);
          } else {
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
  
    _initLocalListeners():void {
      this.todoList.addEventListener("input", event=> {
        if ((<HTMLElement>event.target).className === "editable") {
          this._temporaryTodoText = (<HTMLElement>event.target).innerText;
        }
      });
    }
  
    bindAddTodo(handler: Function):void {
      this.form.addEventListener("submit", event => {
        event.preventDefault();
  
        if (this._todoText) {
          handler(this._todoText);
          this._resetInput();
        }
      });
    }
  
    bindDeleteTodo(handler: Function):void {
      this.todoList.addEventListener("click", event => {
        if ((<HTMLElement>event.target).className === "delete") {
          const id = (<HTMLElement>event.target).parentElement.id;
  
          handler(id);
        }
      });
    }
  
    bindEditTodo(handler: Function):void {
      this.todoList.addEventListener("focusout", event => {
        if (this._temporaryTodoText) {
          const id = (<HTMLElement>event.target).parentElement.id;
  
          handler(id, this._temporaryTodoText);
          this._temporaryTodoText = "";
        }
      });
    }
  
    bindToggleTodo(handler: Function):void {
      this.todoList.addEventListener("change", event => {
        if ((<HTMLInputElement>event.target).type === "checkbox") {
          const id = (<HTMLInputElement>event.target).parentElement.id;
  
          handler(id);
        }
      });
    }
  }