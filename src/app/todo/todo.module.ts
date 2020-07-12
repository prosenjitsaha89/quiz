import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDataComponent } from './components/todo-data/todo-data.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoListComponent, TodoDataComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressBarModule
  ]
})
export class TodoModule { }
