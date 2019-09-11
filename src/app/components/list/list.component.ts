import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { PostModel } from 'src/app/models/post.model';
import { CaseComponent } from 'src/app/components/case/case.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { SearchService } from 'src/app/service/search.servise';
import { map, mergeAll, debounce, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
  
})
export class ListComponent implements OnInit {

  
  name_p: ListModel[];
  public data: ListModel;

//  searchPost$ = new Subject<any>();

  type: string;
  private subscription: Subscription;
  constructor(public httpService:ListService, private activateRoute:ActivatedRoute) { }

  ngOnInit() {

    this.httpService.getList().subscribe();
    this.getList();
   
    this.subscription = this.activateRoute.params.subscribe(params=> {
      this.type = params.type;
      this.httpService.reEmitList();
    });

    this.httpService.searchPostT.subscribe(data => {
      this.name_p = data;
    });
  }

  public searchRecords(e: any){
    this.httpService.goToSearch(e.currentTarget.value);
    if (!e.currentTarget.value){
      this.httpService.reEmitList();
    }
  }

  public getList() {
    this.httpService.list$.subscribe(data => {
      if (this.type === 'yur') {
        this.name_p = data.filter(item => item.type === 'Юр.Лицо');
      } else if (this.type === 'fiz') {
        this.name_p = data.filter(item => item.type === 'Физ.Лицо');
      } else {
        this.name_p = data;
      }
    });
  }


}
