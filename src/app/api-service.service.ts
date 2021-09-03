import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  getApiData(){
    let apiurl="https://randomuser.me/api/";
    return this.http.get(apiurl);
  }
}
