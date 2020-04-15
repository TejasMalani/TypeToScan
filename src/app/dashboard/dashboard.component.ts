import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  default: string;
  clicka: boolean;
  success: string;
  nosuccess: boolean;
  index = 0;
  labelIndex = 0;
  constructor(private service: CommonService) { }
  label = '';
  ngOnInit() {
    this.service.setData();
    this.data = this.service.getData();
  }

  checkData(userInput) {
    if (userInput === '') {
      alert('Please Enter value that you want to match');
    } else {
      if (this.label === '') {
        alert('Please select one option that you want to match');
      } else {
          if (userInput === this.label) {
            if (this.data[this.labelIndex].isValid === 'success') {
              alert('Data is already validated , Please select another data');
            } else {
              alert(userInput + ' == equals == ' + this.label);
              this.service.updateData(this.labelIndex, 'success');
            }
          } else {
            alert(userInput + ' == not equals == ' + this.label);
            this.service.updateData(this.labelIndex, 'nosuccess');
          }
      }

    }
  }
  // clearAll() {
  //   localStorage.clear();
  // }

  setData(label, index) {
    this.label = label;
    this.labelIndex = index;
  }

}
