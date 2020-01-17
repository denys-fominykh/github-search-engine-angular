import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
