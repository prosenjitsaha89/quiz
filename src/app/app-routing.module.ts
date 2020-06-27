import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './components/test/test.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DynamicReactiveComponent } from './components/dynamic-reactive/dynamic-reactive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/reactive',
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'template',
    component: TemplateFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
  },
  {
    path: 'reactive-array',
    component: DynamicReactiveComponent,
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
