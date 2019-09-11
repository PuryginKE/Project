import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { ListModel } from 'src/app/models/list.model';

@Component({
  selector: 'app-top-auk',
  templateUrl: './top-auk.component.html',
  styleUrls: ['./top-auk.component.css']
})
export class TopAukComponent implements OnInit {

  public topList: ListModel[];
  public data: ListModel;

  constructor(public httpServise:ListService) { }

  ngOnInit() {
    this.httpServise.getTopList().subscribe( data =>
      {
        debugger
        this.topList = data;
      }
    );
    
  }

}
