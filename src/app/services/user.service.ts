import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.urlApi + 'users/';

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get<IUser[]>(this.url);
  }

}
