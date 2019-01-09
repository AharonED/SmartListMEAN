import { Component, OnInit } from '@angular/core';
import { AreaChartConfig } from '../area-chart/area-chart-config';
import { GroupsHLLService } from "../../services/groups-hll.service";

@Component({
  selector: 'app-groups-checklists',
  templateUrl: './groups-checklists.component.html',
  styleUrls: ['./groups-checklists.component.css']
})

export class GroupsChecklistsComponent implements OnInit {

  private areaChartConfig: Array<AreaChartConfig>;

  constructor(    public groupsService: GroupsHLLService) { 

    
  }

  ngOnInit() {
  }

  getStats() {
/*
// We create a new AreaChartConfig object to set groups by checklists config
let groupsArea = {
  settings: {
    fill: 'rgba(195, 0, 47, 1)',
    interpolation: 'monotone'
  }, dataset: this.groupsService.getGroupChecklistsCount().subscribe(groupData => {
    console.log(groupData);
    //this.GroupsCount =parseInt(JSON.stringify(groupData) );
    return { x: groupData._id, y: groupData.count };
   })
   //.map(groupData => {
   // return { x: groupData._id, y: groupData.count };
  //})
};

// to finish we append our AreaChartConfigs into an array of configs 
this.areaChartConfig = new Array<AreaChartConfig>();
this.areaChartConfig.push(groupsArea);

   */

  }
}
