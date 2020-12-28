import {Component, OnInit, ViewChild} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('target') targetElement: any;
  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  toTop() {
    // const height = this.targetElement.nativeElement.offsetHeight;
    this.viewportScroller.scrollToPosition([0, 4000]);
  }

  ngOnInit(): void {
  }

}
