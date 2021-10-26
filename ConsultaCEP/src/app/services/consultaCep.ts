import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ConsultaCepService {
    protected baseUrl = environment.apiUrl;

    constructor(protected httpClient: HttpClient) { }

    protected httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    
    public consultarCep(cep: String): Observable<Object> {
        return this.httpClient.get(`${this.baseUrl}/cep/${cep}`);
    }
}