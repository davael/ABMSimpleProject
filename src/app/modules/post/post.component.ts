import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/ipost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts$!: Observable<IPost[]>;
  
  constructor(private _postService: PostService){}
  ngOnInit(): void {
    this.posts$= this._postService.getPosts();
  }

}
