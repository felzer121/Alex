import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ServicesComponent } from './component/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { WorksComponent } from './component/works/works.component';
import { ReviewsComponent } from './component/reviews/reviews.component';
import {IvyCarouselModule} from "angular-responsive-carousel";
import { ContactComponent } from './component/contact/contact.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FooterComponent } from './component/footer/footer.component';
import { SomeDataService } from './services/some.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    WorksComponent,
    ReviewsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    IvyCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
    SomeDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
