import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ElizaService
{
    private apiURL = 'localhost:8080';

    constructor(private http: HttpClient) {}

    public postResponse(resp: String): Observable<any>
    {
        return this.http.post<any>(`${this.apiURL}`, resp);
    }
}