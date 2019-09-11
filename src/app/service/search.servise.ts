import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchModel } from '../models/search.model';
import { HttpClient } from '@angular/common/http';
import { ListModel } from '../models/list.model';
import { filter } from 'rxjs/operators';

@Injectable()
export class SearchService{
  private _list$: BehaviorSubject<ListModel[]> = new BehaviorSubject(null);

  record = this._list$.getValue;

  constructor(
    public http: HttpClient
  ) { }


    public Search(record){
    //  return this.record.of().pipe(filter())
      
    }


}