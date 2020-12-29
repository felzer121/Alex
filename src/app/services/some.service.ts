import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SomeDataService {
  header: number = 1;
  services: number = 1;
  works: number = 1;
  reviews: number = 1;
  title: string = 'hello';
  content: string = 'hello';
}
export class SomeService {

  constructor() { }
}

