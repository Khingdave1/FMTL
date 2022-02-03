import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any;
  content: any;

  constructor(private projectsService: ProjectsService, private pagesService: PagesService) { }

  ngOnInit(): void {
    // Get Pojects data
    this.getProjectsData()

    // Projects cpage content
    this.getProjectsPageData()
  }

  // Get Projects Data
  getProjectsData() {
    this.projectsService.getAllProjects().subscribe((res: any) => {
      this.projects = res.data.theproject
    }, ((error: any) => {
      console.log(error)
    }))
  }
  // Projects cpage content
  getProjectsPageData() {
    this.pagesService.getAllPages().subscribe((res: any) => {
      this.content = res.data.project
      console.log(this.content)
    }, ((error: any) => {
      console.log(error)
    }))
  }

}
