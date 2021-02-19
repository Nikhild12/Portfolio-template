import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  config:any = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  sendMail(mailData){
    return this.http.post(this.config + '/contactUs',mailData);
  }
}
