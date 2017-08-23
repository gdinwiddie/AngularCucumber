import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZIP Code Lookup';
  private _zipcode = '12345';
  public dropdownValue: string = '';
  public foo: string = 'bar';

  @Input()
  set zipcode(value: string) {
    this._zipcode = (value && value.trim()) || '<not set>';
  }
  get zipcode(): string {
    return this._zipcode;
  }

  ngDoCheck() {
    this.zipcode = '';
    this.foo = 'baz';
  }

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }
}
