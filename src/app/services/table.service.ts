import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  InsuredList = '../JSON/insurDetails.json';

  constructor(private api: ApiService) { }

  fetchList(){
    this.api.get(this.InsuredList).subscribe(data =>{
        console.log(data);
        
    })
  }
}
