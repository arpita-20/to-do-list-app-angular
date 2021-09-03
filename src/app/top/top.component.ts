import { Component, OnInit,Input,EventEmitter,Output, OnChanges } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit,OnChanges {
total1:any;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
   this.total1= this.shared.getTotal();

  }
  ngOnChanges()
  {
    console.log("on changes");
  }
    @Input() total: any ;
    
}
