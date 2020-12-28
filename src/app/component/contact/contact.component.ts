import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {SomeDataService} from "../../services/some.service";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
