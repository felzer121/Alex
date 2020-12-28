import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SomeDataService} from "../../services/some.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  // @ts-ignore
  @ViewChild ('works') works: ElementRef;
  constructor(private someSrv: SomeDataService) {
    setTimeout(() => { someSrv.works = this.works.nativeElement.offsetHeight;  }, 500);
  }

  ngOnInit(): void {
  }

}
