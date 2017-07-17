import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService} from '../api-service.service';
import {BlogClass} from '../blog-class';
import { BusyModule } from 'angular2-busy';
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
bloglist: BlogClass[];
busy: Promise<any>;
  constructor(
    private Api: ApiServiceService,
    private http: Http
  ) { }

  ngOnInit() {
   this.busy = this.http.get('...').toPromise();
   this.getBlog();
  }

  getBlog() {
 this.Api
    .getBloglist()
  .then(bloglist => this.bloglist = bloglist)
}


  }


