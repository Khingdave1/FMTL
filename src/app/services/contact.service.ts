import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions: any;
  postUrl = 'https://first-marina-be.herokuapp.com/contact/requests';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  // Post Contact Request
  postData(payload: any) {
    return this.http.post(this.postUrl, payload, this.httpOptions)
  }

}
