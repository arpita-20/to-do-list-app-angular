import { TasklistComponent } from './tasklist/tasklist.component';
import { Component, ViewChild, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy,DoCheck,AfterContentInit,AfterViewInit
 
{
  ngOnInit(){
    console.log("Init");
  }
  ngOnChanges(){
    console.log("onchanges");
  }
  ngDoCheck(){
    console.log("docheck");
  }
  ngAfterContentInit(){
    console.log("aftercontent init")
  }
  ngAfterViewInit(){
    console.log("afterviewinit");
  }
  ngOnDestroy(){
    console.log("destroy");
  }
  title = 'toDoList2';
  // @ViewChild(TasklistComponent, {static: false}) 
  // currentMsgFromChild1ToChild2 : any;
  // fwdMsgToSib2($event:any) 
  // { 
  //   this.currentMsgFromChild1ToChild2 = $event; 
  // }
  
  total:any;
  recieve($event:any)
  {
    this.total=$event;
  }

}
