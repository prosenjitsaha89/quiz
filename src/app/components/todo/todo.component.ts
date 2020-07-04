import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  public todoList = [];
  public isHint = false;

  /**
   * Add new To Do in List
   * @param val = target value
   */
  addToDoList(val) {
    console.log('addToDOList()', val);

    if (val)
      this.todoList.push(val);
  }

  handleItemDel(e) {
    this.isHint = e;
  }

}
