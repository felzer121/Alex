import { Component, OnInit } from '@angular/core';
import {SomeDataService} from "../../../services/some.service";

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {

  constructor(private someSrv: SomeDataService) {}
  images: any[] = this.someSrv.images;

  ngOnInit(): void {
  }

}
