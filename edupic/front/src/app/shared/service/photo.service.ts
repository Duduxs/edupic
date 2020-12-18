import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from '../model/photo-model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private httpClient: HttpClient) {}

  private apiUrl = "http://localhost:3000/"

  public getPhotosByUser(user: String):Observable<PhotoModel []>{
    return this.httpClient.get<PhotoModel[]>(`${this.apiUrl}${user}/photos`);
  }
}
