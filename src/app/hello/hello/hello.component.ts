import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  _array : String[] = [
      'Hello World',
      'Привет Мир',
      'Привіт Світ',
      'Hola Mundo',
      'Bonjour le monde',
  ];
  sentence : String = '';

  constructor() { }

  ngOnInit() {
    this._array.forEach(function (item, key) {
        this.sentence += `Номер: ${key+1}, Значение: ‘${item}’ <br>`;
    }, this)
  }

}
