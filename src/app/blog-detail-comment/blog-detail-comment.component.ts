import { Component, OnInit } from '@angular/core';
import {BlogComment} from '../blog-comment';
import {ApiServiceService} from '../api-service.service';
import {BlogClass} from '../blog-class';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/observable';
import {Http} from '@angular/http';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-blog-detail-comment',
  templateUrl: './blog-detail-comment.component.html',
  styleUrls: ['./blog-detail-comment.component.css']
})
export class BlogDetailCommentComponent implements OnInit {
blogcomment: BlogComment[];
  constructor(
    private Api: ApiServiceService,
    private Location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     this.route.params
    .switchMap((params: Params) => this.Api.getBlogCommentById (+params['id']))
    .subscribe(blog => this.blogcomment = blog);
  }

}
