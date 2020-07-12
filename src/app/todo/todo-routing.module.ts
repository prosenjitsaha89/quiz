import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDataComponent } from './components/todo-data/todo-data.component';

const routes: Routes = [
  {
    path: '',
    component: TodoDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }