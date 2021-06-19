import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  title!:string;
  desc!:string;
  sno!:number;
  active!:boolean;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.sno++;
    const todo= {
      sno:this.sno,
      title:this.title,
      desc:this.desc,
      active:this.active
    }
    this.todoAdd.emit(todo);
  }
}
