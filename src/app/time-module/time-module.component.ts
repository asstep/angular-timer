import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-module',
  templateUrl: './time-module.component.html',
  styleUrls: ['./time-module.component.css']
})
export class TimeModuleComponent implements OnInit {
  monthNames : String[];
  getMonth : number;
  getHours : number;
  sentence : string;
  _currDate : string;


  constructor() {

  }

  getFormatedData(data) : string {
    this.getMonth = data.getMonth();
    this.getHours = data.getHours();
    this.monthNames = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

    if (9 <= this.getHours && this.getHours < 14) {
        this.sentence = "Не пропустите обед.";
    } else if (14 <= this.getHours && this.getHours < 21) {
        this.sentence = "Время близится к ужину.";
    } else {
        this.sentence = "С утра будет завтрак.";
    }
    return `Здравствуйте, сегодня ${data.getDate()} 
                                  ${this.monthNames[this.getMonth]} 
                                  ${data.getUTCFullYear()} года, 
            текущее время ${data.getHours()}:
                          ${(data.getMinutes()<10?'0':'') + data.getMinutes()}:
                          ${(data.getSeconds()<10?'0':'') + data.getSeconds()}.
            ${this.sentence}`;
  }

  ngOnInit() {
    this._currDate = this.getFormatedData(new Date());
    setInterval(()=> {
      this._currDate = this.getFormatedData(new Date());
    },1000);
  }

}
