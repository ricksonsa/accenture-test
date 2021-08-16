import { PhotosService } from './../../shared/services/photos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';


@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ],
  providers: [
    PhotosService
  ]
})
export class PhotosModule { }
