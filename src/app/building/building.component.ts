import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  numOfFloors: Number = 0;

  constructor() { }

  ngOnInit() {
  }

}
