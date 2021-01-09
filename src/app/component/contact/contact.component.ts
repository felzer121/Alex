import { Component, Inject, Injectable, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactUsModel, CrudService } from '../../services/shared/crud.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContactComponent implements OnInit {

  public contactUsModel = new ContactUsModel();

  constructor(private crudService: CrudService) {
  }

  ngOnInit(): void {
  }
  
  public sendMessage(name: string, email:string, phone:string, message:string, isAgreement: boolean) {
    this.contactUsModel.name = name;
    this.contactUsModel.email = email;
    this.contactUsModel.phone = phone;
    this.contactUsModel.message = message;
    this.contactUsModel.isAgreement = isAgreement;

    this.crudService.sendMessage(this.contactUsModel).subscribe((data: {}) => {
      console.log(data);
    })
  }
}
