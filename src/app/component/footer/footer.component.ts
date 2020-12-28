import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {SomeDataService} from "../../services/some.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
    private someSrv: SomeDataService
  ) {
    this.someSrv = someSrv;
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
