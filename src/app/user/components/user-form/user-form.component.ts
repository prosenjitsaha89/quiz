import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { DataResolverService } from '../../services/data-resolver.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  private paramId;

  public empForm;
  public isLoader: boolean = false;
  public blankDataModel = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    cell: '',
    address: {
      building: 'a',
      landMark: 'a',
      post: 'a',
      state: 'a',
      pinCode: 'a'
    },
    department: 'a',
    designation: 'a'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataResolverService: DataResolverService) {

  }

  ngOnInit() {
    console.log('ngOnInit()');

    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.paramId = param.id;
        this.getEmployee(param.id);
      } else {
        this.initEmpForm(this.blankDataModel);
      }
    });
  }

  initEmpForm(data) {
    console.log('initEmpForm()');

    this.empForm = this.fb.group({
      firstName: [data.firstName, [Validators.required]],
      lastName: [data.lastName, [Validators.required]],
      email: [data.email, [Validators.required]],
      cell: [data.cell, [Validators.required]],
      age: [data.age, [Validators.required]],
      address: this.fb.group({
        building: [data.address.building, [Validators.required]],
        landMark: [data.address.landMark, [Validators.required]],
        post: [data.address.post, [Validators.required]],
        state: [data.address.state, [Validators.required]],
        pinCode: [data.address.pinCode, [Validators.required]],
      }),
      department: [data.department, [Validators.required]],
      designation: [data.designation, [Validators.required]],
    });
  }

  getEmployee(id: number) {
    console.log('getEmployee()', id);

    this.dataResolverService.getEmployee(id).subscribe(
      res => {
        console.log('Get Response', res);
        this.isLoader = false;
        this.initEmpForm(res);
      },
      err => {
        console.log('Get Error', err);
        this.isLoader = false;
      });
  }

  onSubmit() {
    console.log('onSubmit()', this.empForm.value);

    this.isLoader = true;

    this.paramId ? this.updateData(this.paramId, this.empForm.value) : this.addData();
  }

  addData() {
    this.dataResolverService.addEmployee(this.empForm.value).subscribe(
      res => {
        console.log('Post Response', res);
        this.isLoader = false;
        this.onCancel();
      },
      err => {
        console.log('Post Error', err);
        this.isLoader = false;
      });
  }

  updateData(id, data) {
    this.dataResolverService.updateEmployee(id, data).subscribe(
      res => {
        console.log('PUT Response', res);
        this.isLoader = false;
        this.onCancel();
      },
      err => {
        console.log('PUT Error', err);
        this.isLoader = false;
      });
  }

  onReset() {
    console.log('onReset()');

    this.empForm.reset();
  }

  onCancel() {
    console.log('onCancel()');

    this.router.navigate(['/user']);
  }

}
