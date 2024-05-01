import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/iuser';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postForm!: FormGroup;
  idPost!: string;
  users$!: Observable<IUser[]>;

  constructor(private routeActivated: ActivatedRoute, private _postService: PostService, private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
    this.getUsers();
    this.idPost = this.routeActivated.snapshot.paramMap.get('idPost')!;
    if (this.idPost) {
      this.loadForm(this.idPost);
    }
  }
  onSubmit() {
    if (this.idPost) {
      this.updatePost();
      return;
    }
    this.createPost();
  }

  private updatePost() {
    this._postService.putPost(this.postForm.value).subscribe(x => {
      if (x) {
        alert("se actualizo correctamente");
        this.router.navigateByUrl('/posts');
      }
    })
  }

  private createPost() {
    this._postService.postPost(this.postForm.value).subscribe(x => {
      if (x) {
        alert("se creo correctamente");
        this.router.navigateByUrl('/posts');
      }
    })
  }


  private initForm(): void {
    this.postForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required),
      userId: new FormControl(0, Validators.required)
    });
  }

  private loadForm(idPost: string): void {
    this._postService.getPostById(idPost).subscribe(post => {
      this.postForm.patchValue(post);
    })
  }

  getUsers(){
    this.users$=this._userService.getUsers();
  }
}
