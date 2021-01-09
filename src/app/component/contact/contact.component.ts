import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {ContactUsModel} from '../contact/contactUsModel';

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
  sendMessage(): void {
  //sendMessage(contactUs: ContactUsModel): void {
    console.log('Отправка на бэк');
  }
}
