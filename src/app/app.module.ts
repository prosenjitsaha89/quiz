import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { TestComponent } from './components/test/test.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DynamicReactiveComponent } from './components/dynamic-reactive/dynamic-reactive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    TestComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    NotFoundComponent,
    DynamicReactiveComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
