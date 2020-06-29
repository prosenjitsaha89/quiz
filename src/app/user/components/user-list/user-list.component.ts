import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';/* Added by Estilo 29/06/2020 */
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';/* Added by Estilo 29/06/2020 */

import { DataResolverService } from '../../services/data-resolver.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public employeeList;
  /* Added by Estilo 29/06/2020 */
  public isLoader:Boolean = false;
  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'indeterminate';
  public value = 100;
  public selectedEmp;
  /*------------------------------ */

  constructor(
    private router: Router,
    private dataResolverService: DataResolverService) {

  }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    console.log('Get Fired!');
    this.isLoader = true; /* Added by Estilo 29/06/2020 */
    this.dataResolverService.getEmployeeList().subscribe(
      response => {
        console.log('xxxx Response', response);
        this.isLoader = false; /* Added by Estilo 29/06/2020 */
        this.employeeList = response;
      },
      error => {
        console.log('xxxx Error', error);
        this.isLoader = false; /* Added by Estilo 29/06/2020 */
      });
  }

  onDelEmployee(id: number) {
    console.log('Delete Fired!');

    this.dataResolverService.delEmployee(id).subscribe(
      response => {
        console.log('yyyy Response', response);
        this.isLoader = true; /* Added by Estilo 29/06/2020 */
        this.getEmployeeList();
      },
      error => {
        console.log('yyyy Error', error);
        this.isLoader = false; /* Added by Estilo 29/06/2020 */
      });
  }

  onAdd() {
    console.log('Add Fired!');

    // this.router.navigate(['user','add']);
    this.router.navigate(['/user/add']); /* Added by Estilo 29/06/2020 */
  }

  onEdit() {
    console.log('Edit Fired!');

  }

}