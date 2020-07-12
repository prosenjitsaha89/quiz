import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoComponent } from './components/todo/todo.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'todoApp',
    loadChildren: () => import('./todo-app/todo-app.module').then(m => m.TodoAppModule)
  },
  {
    path: 'todoProsen',
    component: TodoComponent
  },
  {
    path: 'change',
    component: ChangeDetectionComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }