import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {BlogClass} from '../blog-class';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {Http} from '@angular/http';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
blog: BlogClass;
busy: Promise<any>;
  constructor(
    private Api: ApiServiceService,
    private route: ActivatedRoute,
    private Location: Location,
    private http: Http) {

   }

  ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => this.Api.getBlogById(+params['id']))
    .subscribe(blog => this.blog = blog);
     this.busy = this.http.get('...').toPromise();
  }

  goBack() {
  this.Location.back();
}
}
