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
  numOfThrows:number = 1;

  constructor() { }

  ngOnInit() {
  }

  updateNumOfFloors(formData: any) {
    if (isNaN(Number(formData.numOfFloors))) {
      alert('מספר קומות לא תקין');
      return;
    }
    this.floors = [];
    for(let i=1;i<=Number(formData.numOfFloors);i++) {
      console.log(i);

      let newFloor:Floor;
      let regularfloorImg = "./../assets/imgs/regular.png";
      let firstfloorImg = "./../assets/imgs/first.png";
      let lastfloorImg = "./../assets/imgs/last.png";
      if(i == 1) {
        newFloor = {index:i,img:firstfloorImg};
      } else if(i==Number(formData.numOfFloors)) {
        newFloor = {index:i,img:lastfloorImg};
      } else {
        newFloor = {index:i,img:regularfloorImg};
      }
      this.floors.push(newFloor);
    }
    this.calculateMaxNumberOfThrows();
  }

  calculateMaxNumberOfThrows() {
    while((this.numOfThrows*(this.numOfThrows-1))/2 < this.floors.length) {
      this.numOfThrows++;
    }
    this.numOfThrows = this.numOfThrows-1;
  }
}
