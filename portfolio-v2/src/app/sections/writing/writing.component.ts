import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let bgColor = document.body;
    bgColor.className = '';
    bgColor.className = 'b-color-writing';
  }

}
