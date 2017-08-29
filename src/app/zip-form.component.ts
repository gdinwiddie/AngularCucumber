import { Component, Input } from '@angular/core';
import { ZipLookupService } from './zip.service';

@Component({
  selector: 'zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ZipLookupService ]
})
export class ZipFormComponent {
  constructor(private zipLookupService: ZipLookupService) {
  }
  zipcode = '';

  model = this;

  // TODO: this should call the zipcode lookup service
  isValidZip() {
    return this.zipLookupService.lookup(this.zipcode);
  }
}
