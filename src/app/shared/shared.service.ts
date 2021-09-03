import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  total1:any;
  setTotal(data:any)
  {
    this.total1=data;
  }
  getTotal()
  {
    return this.total1;
  }
}
