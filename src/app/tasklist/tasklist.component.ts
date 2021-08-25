
import { isNgContent } from '@angular/compiler';
import { Component, OnInit, Renderer2 , ElementRef } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private renderer:Renderer2, private el: ElementRef ) { }

  ngOnInit(): void {
  }


  list:any[]=[];
  
  addTask(item:string,desc:string)
  {
    
    this.list.push({id:this.list.length,name:item,description:desc});
    console.warn(this.list);
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
 

}
