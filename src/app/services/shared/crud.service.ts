import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ContactUsModel {
    name!: string;
    email!: string;
    phone!: string;
    message!: string;
    isAgreement!: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // REST API
  endpoint = 'https://alexis.team';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  sendMessage(data: ContactUsModel): Observable<ContactUsModel> {
    return this.httpClient.post<ContactUsModel>(this.endpoint + '/contact', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: any) {
     let message = '';
     if(err.error instanceof ErrorEvent) {
      message = err.error.message;
     } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
     }
     console.log(message);
     return throwError(message);
  }
  
}