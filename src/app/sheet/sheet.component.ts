import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  tiles = [
      {text: 'One', cols: 6, rows: 2, color: 'lightblue'},
      {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
      {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
      {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  constructor() { }

  ngOnInit() {
  }

}
