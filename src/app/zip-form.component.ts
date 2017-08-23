import { Component, Input } from '@angular/core';

@Component({
  selector: 'zip-form',
  templateUrl: './zip-form.component.html',
  styleUrls: ['./app.component.css']
})
export class ZipFormComponent {
  zipcode = '';

  model = this;

  // TODO: this should call the zipcode lookup service
  isValidZip() {
    return this.zipcode != '00000';
  }
}
