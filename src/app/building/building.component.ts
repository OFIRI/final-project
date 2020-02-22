import { Component, OnInit } from '@angular/core';

export interface Floor {
  index: number;
  img: string;
}

@Component({
  selector: 'building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  floors: Floor[] = [];
  floorImg = "";

  constructor() { }

  ngOnInit() {
  }

  updateNumOfFloors(formData: any) {
    debugger;
    if (isNaN(Number(formData.numOfFloors))) {
      alert('מספר קומות לא תקין');
      return;
    }
    for(let i=1;i<=Number(formData.numOfFloors);i++) {
      let newFloor = {index:i,img:this.floorImg};
      this.floors.push(newFloor);
    }
  }

}
