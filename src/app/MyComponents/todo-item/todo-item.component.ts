import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!: Todo;

  @Input()
  i!: number;

  //creating delete emit parent (todos component)
  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();

  //creating an checkbox emit to parent (todos component)
  @Output()
  todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onClick(todo: Todo) {                // emits todo to parent. ie. todos.component.ts .
    this.todoDelete.emit(todo);        // emitting to parent since the array resource is present there and 
    console.log("Delete click triggered"); // we need to delete from

  }

  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }

  ngOnInit(): void {
  }

}
