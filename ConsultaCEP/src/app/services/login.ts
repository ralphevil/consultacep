import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export abstract class LoginService {
    protected baseUrl = environment.apiUrl;

    constructor(protected httpClient: HttpClient) { }

    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    public login(user: User): Observable<Object> {
        return this.httpClient.post(`${this.baseUrl}/user`, user, this.httpOptions);
    }
}