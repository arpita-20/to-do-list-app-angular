import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list:any[]=[];
  addTask(item:string,desc:string)
  {
    //window.alert(item);
    this.list.push({id:this.list.length,name:item,description:desc});
    console.warn(this.list);
  }
  removeTask(id:number)
  {
   // console.warn(id);
   this.list=this.list.filter(item=>item.id!=id)
  }
  viewDetails(id:number)
  {
    //console.warn(id);
   window.alert(this.list[id].description);
   //this.list=this.list[id].description;
  }



}
