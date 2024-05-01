import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { IPost } from '../interfaces/ipost';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = environment.urlApi + 'posts/';

  constructor(private http: HttpClient) { }


  getPosts() : Observable<IPost[]>{
    return this.http.get<IPost[]>(this.url);
  }
  getPostById(idPost: string){
    return this.http.get<IPost>(this.url+ idPost);
  }
  putPost(post:IPost){
    return this.http.put(this.url + post.id,post);
  }
  postPost(post:IPost){
    return this.http.post(this.url,post);
  }
  
}
