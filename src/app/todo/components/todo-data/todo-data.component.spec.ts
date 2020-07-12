import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDataComponent } from './todo-data.component';

describe('TodoDataComponent', () => {
  let component: TodoDataComponent;
  let fixture: ComponentFixture<TodoDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
