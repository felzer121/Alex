import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import {SomeDataService} from "../../services/some.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // @ts-ignore
  @ViewChild ('services') contact: ElementRef;
  constructor(private someSrv: SomeDataService) {
    setTimeout(() => { someSrv.services = this.contact.nativeElement.offsetHeight;  }, 500);
  }
  ngOnInit(): void {
  }
  toTop() {
    // const height = this.targetElement.nativeElement.offsetHeight;
    // this.viewportScroller.scrollToPosition([0, 4000]);
  }
}
