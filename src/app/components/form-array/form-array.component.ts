import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  public form;
  public employees: string[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  onKeyUp() {
    const val = this.form.controls.name.value;

    if (val) {
      this.employees.push(val);
      this.form.controls.name.setValue('');
    }
  }

  removeEmp(index: number) {
    this.employees.splice(index, 1);
    console.log(this.employees);
  }
}