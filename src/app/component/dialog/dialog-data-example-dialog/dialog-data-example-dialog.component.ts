import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SomeDataService} from "../../../services/some.service";

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.scss']
})
export class DialogDataExampleDialogComponent implements OnInit {
  constructor(private someSrv: SomeDataService) {}
  title: string = this.someSrv.title;
  content: any[] = this.someSrv.content;
  ngOnInit(): void {

  }

  images = [
    {path: 'assets/img/project_1-1.jpg'},
    {path: 'assets/img/project_1-2.jpg'},
    {path: 'assets/img/project_1-3.jpg'},
    {path: 'assets/img/project_1-4.jpg'},
    {path: 'assets/img/project_1-5.jpg'}
  ]
}
