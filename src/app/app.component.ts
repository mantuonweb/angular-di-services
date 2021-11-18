import { Component, VERSION } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public testService: TestService) {}
  setMessage() {
    this.testService.setMessage('New Test');
  }
}
