import { Component, Input, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ZipLookupService } from './zip.service';

@Directive({
  selector: "zip-form",
  exportAs: "zipForm"
})

@Component({
  selector: 'zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ZipLookupService ],
})

export class ZipFormComponent {
  constructor(private zipLookupService: ZipLookupService) {
  }
  zipcode = '-----';

  model = this;

  // TODO: this should call the zipcode lookup service
  isValidZip() {
    return this.zipLookupService.lookup(this.zipcode);
  }
}
