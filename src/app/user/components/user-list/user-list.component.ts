import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataResolverService } from '../../services/data-resolver.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public employeeList;

  constructor(
    private roter: Router,
    private dataResolverService: DataResolverService) {

  }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    console.log('Get Fired!');

    this.dataResolverService.getEmployeeList().subscribe(
      response => {
        console.log('xxxx Response', response);
        this.employeeList = response;
      },
      error => {
        console.log('xxxx Error', error);
      });
  }

  onDelEmployee(id: number) {
    console.log('Delete Fired!');

    this.dataResolverService.delEmployee(id).subscribe(
      response => {
        console.log('yyyy Response', response);
        this.getEmployeeList();
      },
      error => {
        console.log('yyyy Error', error);
      });
  }

  onAdd() {
    console.log('Add Fired!');

    this.roter.navigate(['user','add']);
  }

  onEdit() {
    console.log('Edit Fired!');

  }

}
