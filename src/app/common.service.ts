import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  SetOne = [
    {value: 'A1', isValid: 'default'},
    {value: 'B1', isValid: 'default'},
    {value: 'C1', isValid: 'default'},
    {value: 'D1', isValid: 'default'},
    {value: 'E1', isValid: 'default'},
  ];
  SetTwo = [
    {value: 'V2', isValid: 'default'},
    {value: 'W2', isValid: 'default'},
    {value: 'X2', isValid: 'default'},
    {value: 'Y2', isValid: 'default'},
    {value: 'Z2', isValid: 'default'},
  ];
  data = [this.SetOne , this.SetTwo ];
  key = 'test1';
  arrayIndex = 0;
  retrievedObject: any;
  dashBoardData: any;
  constructor() {
    this.getData();
   }

  setData() {
    console.log('setData');
    if (!this.retrievedObject) {
      localStorage.setItem(this.key, JSON.stringify(this.data));
     }
  }
  getData() {
    console.log('getData');
    this.retrievedObject = JSON.parse(localStorage.getItem('test1'));
    if (this.retrievedObject) {
      for (const entry of this.retrievedObject[0]) {
        if ((entry.isValid === 'default') || (entry.isValid === 'nosuccess')) {
          this.dashBoardData = this.retrievedObject[0];
          this.arrayIndex = 0;
          break;
        } else {
          console.log('else');
          this.dashBoardData = this.retrievedObject[1];
          this.arrayIndex = 1;
        }
      }
    }
    console.log('dashBoardData', this.dashBoardData + 'retrived obj', this.retrievedObject);
    return  this.dashBoardData ;
  }
  updateData(labelIndex, status) {
     console.log(labelIndex);
     this.retrievedObject[this.arrayIndex][labelIndex].isValid = status;
     console.log('modified Obj', this.retrievedObject);
     localStorage.setItem(this.key, JSON.stringify(this.retrievedObject));
     if (this.retrievedObject) {
      for (const entry of this.retrievedObject[0]) {
        if ((entry.isValid === 'default') || (entry.isValid === 'nosuccess')) {
          break;
        } else {
          location.reload();
        }
      }
     }
    }
}
