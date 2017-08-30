import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
  ],
  exports: [],
  declarations: [AdminComponent],
  bootstrap: [AdminComponent],
  providers: [],
})
export class AdminModule {
}
