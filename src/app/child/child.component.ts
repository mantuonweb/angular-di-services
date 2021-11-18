import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  providers: [TestService],
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(public testService: TestService) {}

  ngOnInit() {}
}
