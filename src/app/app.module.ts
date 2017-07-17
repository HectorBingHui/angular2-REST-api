import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import { AppComponent } from './app.component';
import { SecondComponent} from './Blog-Detail/second.component';
import { OwlModule } from 'ng2-owl-carousel';
import { ComponentComponent } from './BlogList/component.component';
import {ApiServiceService} from './api-service.service';
import { BlogDetailCommentComponent } from './blog-detail-comment/blog-detail-comment.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'angular4-carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    SecondComponent,
    BlogDetailCommentComponent,
    CarouselComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    OwlModule,
    HttpModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: 'index/:id',
        component: SecondComponent ,

      },
      {
      path: 'index',
      component: ComponentComponent,
    }])
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
