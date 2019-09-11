import { Component, OnInit, Input } from '@angular/core';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-caseend',
  templateUrl: './caseend.component.html',
  styleUrls: ['./caseend.component.css']
})
export class CaseendComponent implements OnInit {
  @Input() data: any;
  
  

  @Input() filterValue: string;
  

  constructor() { }

  ngOnInit() {
    
  }

}
