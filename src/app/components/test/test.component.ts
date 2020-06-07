import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public data;
  public isVisible = false;


  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.data = this.testService.data;
  }

}
