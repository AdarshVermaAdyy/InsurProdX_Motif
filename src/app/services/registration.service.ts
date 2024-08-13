import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  countryUrl = 'https://restcountries.com/v3.1/all';

  constructor(private api: ApiService) { }

  fetchCountries(): Observable<any[]>{
    return this.api.get(this.countryUrl);
  }
}
