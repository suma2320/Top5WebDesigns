import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getTopWebDesigns() {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-ListenAPI-Key':  '17555edc50a34a0abf5244251f27b0c9',
        'Accept': 'application/json'
      })
    };
    
    return this.httpClient.get(`https://listen-api.listennotes.com/api/v2/search?q=web%20design`,httpOptions);
  }
}