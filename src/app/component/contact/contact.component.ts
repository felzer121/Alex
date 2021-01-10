import { Component, Inject, Injectable, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactUsModel, CrudService } from '../../services/shared/crud.service';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogDataExampleDialogComponent } from "../dialog/dialog-data-example-dialog/dialog-data-example-dialog.component";
import {SomeDataService} from "../../services/some.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContactComponent implements OnInit {

  public contactUsModel = new ContactUsModel();

  constructor(public dialog: MatDialog, private someSrv: SomeDataService, private crudService: CrudService) {
  }

  ngOnInit(): void {
    this.someSrv.title = 'Ваше сообщение успешно отправлено';
    this.someSrv.images = [
      {path: 'assets/img/send.jpg'}
    ];
    this.someSrv.subtitle = false;
    this.someSrv.subtitle = false;
    this.someSrv.content[0] = "Мы свяжемся с вами в ближайшее время";
  }

  public sendMessage(name: string, email:string, phone:string, message:string, isAgreement: boolean) {
    this.contactUsModel.name = name;
    this.contactUsModel.email = email;
    this.contactUsModel.phone = phone;
    this.contactUsModel.message = message;
    this.contactUsModel.isAgreement = isAgreement;


    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });

    this.crudService.sendMessage(this.contactUsModel).subscribe((data: {}) => {
      console.log(data);
    })
  }
}
