import { Injectable } from '@angular/core';

@Injectable()
export class ZipLookupService {
  constructor() {
  }

  lookup(zipcode: string) {
    return zipcode != '00000';
  }
}

