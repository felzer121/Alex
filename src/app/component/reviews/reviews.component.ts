import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent implements OnInit {

  constructor() { }
  test:number = 3;
  ngOnInit(): void {
    if(document.body.clientWidth < 1300) {
      this.test = 2;
    }
    if (document.body.clientWidth < 800) {
      this.test = 1;
    }
  }

}
