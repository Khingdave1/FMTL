import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  httpOptions: any;
  getProjectsUrl = 'https://first-marina-be.herokuapp.com/projects';

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  // Get all Projects
  getAllProjects() {
    return this.http.get(this.getProjectsUrl, this.httpOptions)
  }
}
