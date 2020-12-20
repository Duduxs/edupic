import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoModel } from 'src/app/shared/model/photo-model';
import { PhotoService } from 'src/app/shared/service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: PhotoModel[];

  constructor(private photoService: PhotoService, private routeActivated: ActivatedRoute) { }

  ngOnInit(): void {
    this.photoService.getPhotosByUser(this.routeActivated.snapshot.params.userName).forEach(r => this.photos = r)
  }

}
