import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { authRequest, authResponse } from '@models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://127.0.0.1:5001/authenticate'; // TODO pull from env once ENV set up
  http = inject(HttpClient);

  authenticate(user: authRequest): Observable<authResponse> {
    return this.http.post<authResponse>(this.API_URL, user);
  }
}
