import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() list;
  @Output() itemDelete = new EventEmitter();

  itemDel() {
    this.itemDelete.emit(true);
  }
}
