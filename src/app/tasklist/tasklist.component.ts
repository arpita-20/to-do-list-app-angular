
import { isNgContent } from '@angular/compiler';
import { Component, OnInit, Renderer2 , ElementRef,Input, Output, EventEmitter } from '@angular/core';
import {SharedService} from "../shared/shared.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }


  list:any[]=[];
  
  addTask(item:string,desc:string)
  {
    
    this.list.push({id:this.list.length,name:item,description:desc});
    console.warn(this.list);
    console.warn(this.list.length);
    
  }
  removeTask(id:number)
  {
  
   this.list=this.list.filter(item=>item.id!=id)
  }

  
  oldItemData = {
    name : 'name',
    description:'description'
  } 

editModeToggle =false;
  
edit(itemName:any,itemDesc:any) {
  this.editModeToggle = true;
  this.oldItemData.name= itemName;
  this.oldItemData.description=itemDesc;

   console.warn( this.oldItemData.name);
  console.warn( this.oldItemData.description);
 }

saveChanges(item: any) {

  this.editModeToggle = false;
  
  
}

cancelEdit(itemList:any) {
  this.editModeToggle = false;
  itemList.name= this.oldItemData.name;
  itemList.description=this.oldItemData.description;
 
}


@Output() newItemEvent = new EventEmitter<any>();

   totalRows() {
     console.warn(this.list.length);
    return this.newItemEvent.emit(this.list.length);
  }
  routerName:any;
  routerDesc:any;
  paramPass(item3:any)
  {
    this.routerName=item3.name;
    this.routerDesc=item3.description;
    console.log("title"+this.routerName);
    console.log("desc"+this.routerDesc);
    
    
    this.router.navigate( ['/home'], {queryParams: { n:this.routerName,d:this.routerDesc}});
  
   }
   
  
 

}
