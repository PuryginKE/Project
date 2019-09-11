import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ListModel } from '../models/list.model';
import { ChartsModel } from '../models/charts.model';

@Injectable()
export class ChartService {
    private _list$: BehaviorSubject<ChartsModel[]> = new BehaviorSubject(null);
    public list$: Observable<ChartsModel[]> = this._list$.asObservable().pipe(
        filter(item => item !== null)
    );

    constructor(
        public http: HttpClient
    ) { }

    public getCharts(): Observable<ChartsModel[]> {
        return this.http.get<ChartsModel[]>('http://localhost:8000/v/charts').pipe(
            map(data => {
                const _data = this.mapData(data);
                this._list$.next(_data);
                return _data;
            })
        );
    }

    mapData(data){
    return data.map((item) => {
      return {
      date: item.to_char,
      countPost: item.count,
      }
  });
}

}
