import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!:Todo[];
  constructor() { 
    this.todos =[
      {
        sno:1,
        title:"First title",
        desc:"First todo",
        active:true
      },
      {
        sno:2,
        title:"Second title",
        desc:"Second todo",
        active:true
      },
      {
        sno:3,
        title:"Three title",
        desc:"Three todo",
        active:true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
}
