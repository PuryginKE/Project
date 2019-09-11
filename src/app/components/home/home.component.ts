import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  condition: boolean=true;
  callBack(){
    this.condition=!this.condition;
  }

  constructor() { }

  ngOnInit() {
  }

}
