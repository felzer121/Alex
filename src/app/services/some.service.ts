import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SomeDataService {
  header: number = 1;
  services: number = 1;
  works: number = 1;
  reviews: number = 1;
  subtitle: boolean = true;
  title: string = 'hello';
  contents: string = 'hello';
  content: any[] = [
    { label: 'Выполнено' }
  ]
  images: any[] = [
    { label: 'Выполнено' }
  ]
}
export class SomeService {

  constructor() { }
}

