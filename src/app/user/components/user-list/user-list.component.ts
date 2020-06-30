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
  public selectedEmpId;
  public isLoader: boolean = false;

  constructor(
    private router: Router,
    private dataResolverService: DataResolverService) {

  }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    console.log('Get Fired!');

    this.isLoader = true;

    this.dataResolverService.getEmployeeList().subscribe(
      response => {
        console.log('xxxx Response', response);
        this.isLoader = false;
        this.employeeList = response;
      },
      error => {
        console.log('xxxx Error', error);
        this.isLoader = false;
      });
  }

  onDelEmployee(id: number) {
    console.log('Delete Fired!');

    this.isLoader = true;

    this.dataResolverService.delEmployee(id).subscribe(
      response => {
        console.log('yyyy Response', response);
        this.isLoader = false;
        this.getEmployeeList();
      },
      error => {
        console.log('yyyy Error', error);
        this.isLoader = false;
      });
  }

  onAdd() {
    console.log('Add Fired!');

    // this.router.navigate(['user', 'add']);
    this.router.navigate(['/user/add']);
  }

  onEdit() {
    console.log('Edit Fired!');

    // this.router.navigate(['user', 'add', this.selectedEmpId]);
    this.router.navigate([`/user/edit/${this.selectedEmpId}`]);
  }

}