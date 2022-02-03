import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  httpOptions: any;
  getPagesUrl = 'https://first-marina-be.herokuapp.com/pages';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  // Get All Pages
  getAllPages() {
    return this.http.get(this.getPagesUrl, this.httpOptions)
  }


}
