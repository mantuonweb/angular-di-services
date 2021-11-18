import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  private message = 'Test';
  constructor() {}
  setMessage(message) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
}
