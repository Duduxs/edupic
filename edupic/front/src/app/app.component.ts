import { Component } from '@angular/core';
import { PhotoModel } from './shared/model/photo-model';
import { PhotoService } from './shared/service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos: PhotoModel[];

  constructor(private photoService: PhotoService){}

  ngOnInit(){
    this.photoService.getPhotosByUser('flavio').forEach(r => this.photos = r)
  }

}
