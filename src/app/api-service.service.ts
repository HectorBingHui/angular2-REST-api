import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { BlogClass, Comment } from './blog-class';
import {BlogComment} from './blog-comment';

import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiServiceService {
bloglist: BlogClass[];
busy: Promise<any>;
  private Url = 'https://jsonplaceholder.typicode.com';
blogComment: BlogComment[];
  constructor(private http: Http) { }


  getBloglist(): Promise<BlogClass[]> {
    return this.busy = this.http.get(this.Url + '/posts')
    .toPromise()
    .then(blogdata => blogdata.json() as BlogClass[]);

  }

  getBlogById(id: number): Promise<BlogClass> {
    const blogUrl = `${this.Url + '/posts'}/${id}` ;
    return this.http.get(blogUrl)
    .toPromise()
    .then(blog => blog.json() as BlogClass)

  }

  getBlogCommentById(id: number): Promise<BlogComment[]> {
        const blogUrl = `${this.Url + '/posts'}/${id}/comments` ;
      return this.http.get(blogUrl)
      .toPromise()
      .then(comment => comment.json() as BlogComment[])
  }
CommentById(id: number): Promise<BlogComment[]> {
       return this.http.get(this.Url + '/posts/' + id + '/Comments')
       .toPromise()
       .then(com => com.json() as BlogComment[])
  }
}
