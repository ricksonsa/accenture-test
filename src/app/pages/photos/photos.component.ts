import { take } from 'rxjs/operators';
import { PhotosService } from './../../shared/services/photos.service';
import { Component, OnInit } from '@angular/core';

type Photo = {
  url: string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  items: Photo[] = [];

  constructor(private readonly photosService: PhotosService) { }


  ngOnInit(): void {
    this.photosService.fetch()
      .pipe(take(1))
      .subscribe((photos: any) => {
        this.items = photos;
      });
  }

}
