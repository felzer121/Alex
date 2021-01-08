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
    this.someSrv.content[0] = "1) Дизайн сайта, настольного приложения и фирменный стиль";
    this.someSrv.content[1] = "2) Адаптивная верстка, мобильная версия, настольное приложение";
    this.someSrv.content[2] = "3) Backend ASP.NET Core 3.1";
    this.someSrv.content[3] = "4) Публикация и поддержка";

    this.someSrv.images = [
      {path: 'assets/img/project_1-1.jpg'},
      {path: 'assets/img/project_1-2.jpg'},
      {path: 'assets/img/project_1-3.jpg'},
      {path: 'assets/img/project_1-4.jpg'},
      {path: 'assets/img/project_1-5.jpg'}
    ];

    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  openProject2(): void {
    this.someSrv.title = 'Разработка Web-сайта для компании KD';
    this.someSrv.content[0] = "1) Дизайн сайта и фирменный стиль";
    this.someSrv.content[1] = "2) Адаптивная верстка, мобильная версия";
    this.someSrv.content[2] = "3) Натяжка на CMS";
    this.someSrv.content[3] = "4) Публикация и поддержка сайта";
    this.someSrv.images = [
      {path: 'assets/img/project_2-1.png'},
      {path: 'assets/img/project_2-2.png'},
      {path: 'assets/img/project_2-3.png'},
      {path: 'assets/img/project_2-4.png'},
      {path: 'assets/img/project_2-5.png'},
    ];
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  openProject3(): void {
    this.someSrv.title = 'Разработка Web-сайта для компании Мастер крепежа';

    this.someSrv.content[0] = "1) Дизайн сайта и фирменный стиль";
    this.someSrv.content[1] = "2) Адаптивная верстка, мобильная версия";
    this.someSrv.content[2] = "3) Натяжка на CMS";
    this.someSrv.content[3] = "4) Публикация и поддержка сайта";
    this.someSrv.content[4] = "5) Продвижение";

    this.someSrv.images = [
      {path: 'assets/img/project_3-1.png'},
      {path: 'assets/img/project_3-2.png'},
      {path: 'assets/img/project_3-3.png'},
      {path: 'assets/img/project_3-4.png'},
      {path: 'assets/img/project_3-5.png'},
      {path: 'assets/img/project_3-6.png'}
    ];

    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  openProject4(): void {
    this.someSrv.title = 'Разработка мобильного приложения: "Спорт - это жизнь"';
    
    this.someSrv.content[0] = "1) Дизайн приложения и фирменный стиль";
    this.someSrv.content[1] = "2) Мобильное приложение для Android и iOS";
    this.someSrv.content[2] = "3) Адаптивная верстка";
    this.someSrv.content[3] = "4) Backend-приложение на ASP.NET Core 3.1";
    this.someSrv.content[4] = "5) Публикация и поддержка приложения";

    this.someSrv.images = [
      {path: 'assets/img/project_4-1.png'},
      {path: 'assets/img/project_4-2.png'},
      {path: 'assets/img/project_4-3.png'},
      {path: 'assets/img/project_4-4.png'}
    ];

    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  openProject5(): void {
    this.someSrv.title = 'Разработка Web-сайта по продаже корсетов';
    
    this.someSrv.content[0] = "1) Дизайн сайта и фирменный стиль";
    this.someSrv.content[1] = "2) Адаптивная верстка, мобильная версия";
    this.someSrv.content[2] = "3) Натяжка на CMS";
    this.someSrv.content[3] = "4) Публикация и поддержка сайта";

    this.someSrv.images = [
      {path: 'assets/img/project_5-1.png'},
      {path: 'assets/img/project_5-2.png'},
      {path: 'assets/img/project_5-3.png'},
      {path: 'assets/img/project_5-4.png'},
      {path: 'assets/img/project_5-5.png'},
      {path: 'assets/img/project_5-6.png'}
    ];
    const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
      width: '70%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.animal = result;
    });
  }
  openProject6(): void {
    this.someSrv.title = 'Разработка Web-сайта по продаже хлебобулочных изделий';
    
    this.someSrv.content[0] = "1) Дизайн сайта и фирменный стиль";
    this.someSrv.content[1] = "2) Адаптивная верстка, мобильная версия";
    this.someSrv.content[2] = "3) Натяжка на CMS";
    this.someSrv.content[3] = "4) Публикация и поддержка сайта";
    
    this.someSrv.images = [
      {path: 'assets/img/project_6-1.png'},
      {path: 'assets/img/project_6-2.png'},
      {path: 'assets/img/project_6-3.png'},
      {path: 'assets/img/project_6-4.png'},
      {path: 'assets/img/project_6-5.png'}
    ];
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
