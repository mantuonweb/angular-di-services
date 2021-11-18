import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { TestService } from './test.service';
import { GrandChildComponent } from './child/grand-child/grand-child.component';

@NgModule({
  providers: [TestService],
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    GrandChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
