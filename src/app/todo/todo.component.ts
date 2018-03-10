import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private TodoService: TodoService) { }

  ngOnInit() {
    this.TodoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })
      this.toDoListArray.sort((a, b) => {
        return a.isChecked - b.isChecked;
      })
    })
  }

  onAdd(itemTitle) {
    this.TodoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  toggleCheck($key: string, isChecked) {
    this.TodoService.checkOrUncheckTitle($key, !isChecked);
  }

  onDelete($key) {
    this.TodoService.removeTitle($key);
  }
}
