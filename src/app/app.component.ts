import {Component, ElementRef, ViewChild} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {SomeDataService} from "./services/some.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alexis';
  currentPosition = '';

  constructor(
    private viewportScroller: ViewportScroller,
    private someSrv: SomeDataService
  ) {
    this.someSrv = someSrv;
  }
  menuClosed(){
    console.log("хуйня1");
  }
  toServices() {
    this.viewportScroller.scrollToPosition([0, this.someSrv.header]);
  }
  toWorks() {
    let work = this.someSrv.services + this.someSrv.header;
    this.viewportScroller.scrollToPosition([0, work]);
  }
  toReviews() {
    let work = this.someSrv.services + this.someSrv.header + this.someSrv.works;
    this.viewportScroller.scrollToPosition([0, work]);
  }
  toContact() {
    let work = this.someSrv.services + this.someSrv.header + this.someSrv.works + this.someSrv.reviews ;
    this.viewportScroller.scrollToPosition([0, work]);
  }

  ngOnInit(): void {
  }
}
