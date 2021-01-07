import {Component, ElementRef, OnInit, Inject, ViewChild} from '@angular/core';
import {SomeDataService} from "../../services/some.service";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {DialogDataExampleDialogComponent} from "../dialog/dialog-data-example-dialog/dialog-data-example-dialog.component";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent implements OnInit {

  // @ts-ignore
  @ViewChild ('works') works: ElementRef;
  constructor(public dialog: MatDialog, private someSrv: SomeDataService) {
    setTimeout(() => { someSrv.works = this.works.nativeElement.offsetHeight;  }, 500);
  }

  animal: string | undefined;
  name: string | undefined;
  show: boolean = true;
  button: boolean = false;

  openDialog(): void {
    this.someSrv.title = 'Разработка приложения SmartCCTV';
    this.someSrv.content[0] = "1 Было выполнено";
    this.someSrv.content[1] = "2 Было выполнено";

    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  toProject(): void {
    this.show = false;
    this.button = true;
  }
  ngOnInit(): void {
  }

}
