import { Component, OnInit, Output,ElementRef } from '@angular/core';
import { GroupsHLLService } from "../../../services/groups-hll.service";


@Component({
  selector: 'app-groups-hll',
  templateUrl: './groups-hll.component.html',
  styleUrls: ['./groups-hll.component.css']
})
export class GroupsHLLComponent implements OnInit {

  constructor(    public groupsService: GroupsHLLService , private elementRef:ElementRef ) { 
    this.groupsService.getGroupHLL().subscribe(groupData => {
      console.log(groupData);
     });
  }
  @Output() GroupsCount : number=10;

  ngOnInit() {
    this.groupsService.getGroupHLL().subscribe(groupData => {
     console.log(JSON.stringify(groupData) );
     //this.elementRef.nativeElement.appendChild("<input type='text'  value='" + this.GroupsCount + " #gCount  style='border-style: none' />");
     this.GroupsCount =parseInt(JSON.stringify(groupData) );
     
    });
  }

}
