import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() toDoItem;
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();

  onDeleteItem(item) {
    this.deleteItem.emit(item);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()')
  }
}