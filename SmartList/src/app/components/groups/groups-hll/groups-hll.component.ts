import { Component, OnInit, Output } from '@angular/core';
import { GroupsHLLService } from "../../../services/groups-hll.service";


@Component({
  selector: 'app-groups-hll',
  templateUrl: './groups-hll.component.html',
  styleUrls: ['./groups-hll.component.css']
})
export class GroupsHLLComponent implements OnInit {

  constructor(    public groupsService: GroupsHLLService) { 
    this.groupsService.getGroupHLL().subscribe(groupData => {
      console.log(groupData);
     });
  }
  @Output() GroupsCount : number=10;

  ngOnInit() {
    this.groupsService.getGroupHLL().subscribe(groupData => {
     console.log(JSON.stringify(groupData) );
     this.GroupsCount =parseInt(JSON.stringify(groupData) );
    });
    
    //validate hll algorithm by getting all groups broup-by title...
     this.groupsService.getGroupChecklistsCountTop10().subscribe(groupData => {
      console.log(groupData);
      //this.GroupsCount =parseInt(JSON.stringify(groupData) );
     });


  }

}
