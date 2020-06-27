import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-reactive',
  templateUrl: './dynamic-reactive.component.html',
  styleUrls: ['./dynamic-reactive.component.scss']
})
export class DynamicReactiveComponent implements OnInit {

  userForm;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    console.log('ngOnInit()');

    this.userForm = this.fb.group({
      users: this.fb.array([])
    })

    this.onAddUser();
  }

  onAddUser() {
    const user = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });

    this.userForm.controls.users.push(user);
    console.log('--------->>> onAddUser()', this.userForm.controls);
  }

  onDelUser() {

    const index = this.userForm.controls.users.length - 1;

    this.userForm.controls.users.removeAt(index);
    console.log('--------->>> onDelUser()', this.userForm.controls.users);
  }

}
