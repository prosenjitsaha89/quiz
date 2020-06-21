import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // public myForm = new FormGroup({
  //   email: new FormControl('email.com'),
  //   password: new FormControl(123),
  // });

  public myForm;

  constructor(
    private fb: FormBuilder) { }

  ngOnInit() {
    console.log('ngOnInit()');

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  submitForm() {
    console.log('submitForm()');

    console.log(this.myForm.valid);
  }

  clearForm() {
    console.log('clearForm()');
  }

}

