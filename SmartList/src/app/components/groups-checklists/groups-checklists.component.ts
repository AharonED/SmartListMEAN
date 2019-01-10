import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from '../shared/barchart/barchart.component';
import { GroupsHLLService } from "../../services/groups-hll.service";
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'groups-checklists',
  templateUrl: './groups-checklists.component.html',
  styleUrls: ['./groups-checklists.component.css']
})

export class GroupsChecklistsComponent implements OnInit {
  chartData: Array<any>;

  constructor(public groupsService :GroupsHLLService) {}

  ngOnInit() {
    /*
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
*/
    this.generateData();

  }

  generateData() {
    this.chartData = [];
    this.groupsService.getGroupChecklistsCount().subscribe(groupData => {
      //this.GroupsCount =JSON.stringify(groupData );
      //return { x: groupData._id, y: groupData.count };
      
      //console.log(groupData._id);
      //console.log(groupData.count);
      //console.log(groupData  );

      //console.log(groupData);


      const userStr = JSON.stringify(groupData);

      var arr:Array<any>;
      arr = JSON.parse(userStr, (key, value) => {
        if (typeof value === 'string') {
          return value.toUpperCase();
        }
        return value;
      });
      console.log(arr);


      this.chartData = [];
      var item=[];
      for (let i = 0; i < arr.length; i++) {
        item=arr.pop();
        this.chartData.push([
          item["_id"],
          item["count"]
        ]);
      }

//      arr.forEach(item => {
//        this.chartData.push([item["count"],item["_id"]]);      
//      });
      //this.chartData.push([groupData._id,groupData.count]);      
      console.log( this.chartData);
      //console.log(this.chartData[this.chartData.length-1,1]);
     })
/*
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
      console.log(`Index ${i}`);
    }
    */
  }
}
/*
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
*/

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

   /*
  }
}
*/
