import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let bgColor = document.body;
    bgColor.className = '';
    bgColor.className = 'b-color-web-design';
  }

}
