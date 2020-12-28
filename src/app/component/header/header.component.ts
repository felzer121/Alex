import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { SomeDataService } from "../../services/some.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  @ViewChild ('header') header: ElementRef;

  constructor(
    private viewportScroller: ViewportScroller,
    private someSrv: SomeDataService
  ) {
    this.someSrv = someSrv;
    setTimeout(() => { someSrv.header = this.header.nativeElement.offsetHeight;  }, 500);
  }
  toServices() {
    this.viewportScroller.scrollToPosition([0, this.someSrv.header - 200]);
  }
  toWorks() {
    let work = this.someSrv.services + this.someSrv.header - 100;
    this.viewportScroller.scrollToPosition([0, work]);
  }
  toReviews() {
    let work = this.someSrv.services + this.someSrv.header + this.someSrv.works - 200;
    this.viewportScroller.scrollToPosition([0, work]);
  }
  toContact() {
    let work = this.someSrv.services + this.someSrv.header + this.someSrv.works + this.someSrv.reviews - 100;
    this.viewportScroller.scrollToPosition([0, work]);
  }

  ngOnInit(): void {
  }

}
