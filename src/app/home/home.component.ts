import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import {ApiServiceService} from "../api-service.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:any;
  description:any;
  apiData:any;
  
  list:any[]=[];
  data1:any;

 constructor(private route:ActivatedRoute,private apiService:ApiServiceService) { 
 }

  ngOnInit(): void {
   
      
    
    this.route.queryParams.subscribe((params: any)=>{
      
      this.name=params.n;
      this.description=params.d;
      console.log("params are"+this.name+this.description);
    }
    )
    this.apiService.getApiData().subscribe(data=>{
      this.apiData=data;
     // this.list.push(data);
      console.log(data);
      
    })



  }
  

}


 
