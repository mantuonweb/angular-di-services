import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
})
export class GrandChildComponent implements OnInit {
  constructor(public testService: TestService) {}

  ngOnInit() {}
  setMessage() {
    this.testService.setMessage('New Test');
  }
}
