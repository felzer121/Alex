import {Component, ElementRef, Inject, Injectable, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { ContactUsModel, CrudService } from '../../services/shared/crud.service';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogDataExampleDialogComponent } from "../dialog/dialog-data-example-dialog/dialog-data-example-dialog.component";
import { DialogContactComponent } from "../dialog/dialog-contact/dialog-contact.component";
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
  @ViewChild('name') name: ElementRef | undefined;
  @ViewChild('email') email: ElementRef | undefined;
  @ViewChild('phone') phone: ElementRef | undefined;
  @ViewChild('message') message: ElementRef | undefined;
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
    let ean = true;
    this.contactUsModel.name = name;
    this.contactUsModel.email = email;
    this.contactUsModel.phone = phone;
    this.contactUsModel.message = message;
    this.contactUsModel.isAgreement = isAgreement;
    if (name == '' || email == '' || phone == '') {
      ean = false
    }

    if (ean){
      const dialogRef = this.dialog.open(DialogContactComponent, {
        width: '70%',
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        console.log(result);
      });
      console.log('отправлено')
      // @ts-ignore
      this.name.nativeElement.value = '';
      // @ts-ignore
      this.email.nativeElement.value = '';
      // @ts-ignore
      this.phone.nativeElement.value = '';
      // @ts-ignore
      this.message.nativeElement.value = '';
      this.crudService.sendMessage(this.contactUsModel).subscribe((data: {}) => {
        console.log(data);
      })
    }
  }
}
