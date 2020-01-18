import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private clientId = '1b9a0ab83be88a82a5b3';
  private clientSecret = 'd12903ccc4bb851b0d67ca0ead54696eeeddfb86';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<object> {
    return this.http.get(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  }
}
