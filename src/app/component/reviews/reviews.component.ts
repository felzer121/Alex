import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SomeDataService} from "../../services/some.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReviewsComponent implements OnInit {

  // @ts-ignore
  @ViewChild ('reviews') contact: ElementRef;
  constructor(private someSrv: SomeDataService) {
    setTimeout(() => { someSrv.reviews = this.contact.nativeElement.offsetHeight; }, 500);
  }
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
