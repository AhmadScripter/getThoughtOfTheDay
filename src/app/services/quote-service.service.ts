import { Injectable } from '@angular/core';
import { envoirnmentVariable } from '../Envoirnment/Envoirnment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {
  private apiUrl = 'https://thought-of-the-day.p.rapidapi.com/thought';

  constructor(private http:HttpClient){}

  getThoughtOfTheDay() :Observable<any>{
    const headers = new HttpHeaders()
    .set(envoirnmentVariable.xRapidApiKeyName, envoirnmentVariable.xRapidApiKeyValue)
    .set(envoirnmentVariable.xRapidApiHostName, envoirnmentVariable.xRapidApiHostValue)
    return this.http.get(this.apiUrl, {headers})
  }
}
