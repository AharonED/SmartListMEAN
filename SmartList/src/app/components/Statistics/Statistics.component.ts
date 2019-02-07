import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from '../shared/barchart/barchart.component';
import { GroupsHLLService } from "../../services/groups-hll.service";
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'Statistics',
  templateUrl: './Statistics.component.html',
  styleUrls: ['./Statistics.component.css']
})

export class StatisticsComponent implements OnInit {
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
    this.groupsService.getGroupChecklistsCountTop10().subscribe(groupData => {
      const groups = JSON.stringify(groupData);
      //console.log(groupData);

      var arr:Array<any>;
      arr = JSON.parse(groups, (key, value) => {
        if (typeof value === 'string') {
          return value.toUpperCase();
        }
        return value;
      });
      //console.log(arr);


      this.chartData = [];
      var item=[];
      for (let i = 0; i < arr.length; i++) {
        item=arr.pop();
        this.chartData.push([
          item["title"],
          item["ChecklistsCount"]
        ]);
      }

     })
/*
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
      //console.log(`Index ${i}`);
    }
    */
  }
}
