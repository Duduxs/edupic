import { Component, OnInit } from '@angular/core';
import { PhotoModel } from 'src/app/shared/model/photo-model';
import { PhotoService } from 'src/app/shared/service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: PhotoModel[];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotosByUser('flavio').forEach(r => this.photos = r)
  }

}
