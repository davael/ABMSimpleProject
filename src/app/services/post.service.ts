import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IPost } from '../interfaces/ipost';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = environment.urlApi + 'posts/';

  constructor(private http: HttpClient) { }


  getPosts() : Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url);
  }
}
