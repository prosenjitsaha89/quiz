import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  public date = new Date();
  public myObject = [1, 2, 3];
  public myCurrency = 12;

  public backendObj = { email: '', password: '' };

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(loginForm) {
    console.log('Backend: ', this.backendObj);
    console.log('FORM: ', loginForm);

  }

}
