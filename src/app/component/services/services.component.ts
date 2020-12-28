import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { SomeDataService } from "../../services/some.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // @ts-ignore
  @ViewChild ('services') contact: ElementRef;
  constructor( private viewportScroller: ViewportScroller, private someSrv: SomeDataService ) {
    setTimeout(() => { someSrv.services = this.contact.nativeElement.offsetHeight;  }, 500);
  }
  ngOnInit(): void {
  }
  toContact() {
    let work = this.someSrv.services + this.someSrv.header + this.someSrv.works + this.someSrv.reviews ;
    this.viewportScroller.scrollToPosition([0, work]);
  }
}
