import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipFormComponent } from './zip-form.component';
import { ZipLookupService } from './zip.service';

@NgModule({
  declarations: [
    AppComponent,
    ZipFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ZipLookupService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
