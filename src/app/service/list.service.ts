import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, Subject } from 'rxjs';
import { filter, map, tap, debounce, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ListModel } from '../models/list.model';

@Injectable()
export class ListService {
    private _list$: BehaviorSubject<ListModel[]> = new BehaviorSubject(null);
    public list$: Observable<ListModel[]> = this._list$.asObservable().pipe(
        filter(item => item !== null)
    );

    private searchPost$ = new Subject<any>();
    

    public searchValue: string;
    private _lastSearchValue: string;
    public searchPostT: Observable<any> = this.searchPost$.pipe(
        tap((val) => {
            this._lastSearchValue = val;
        }),
        filter(res => res.length > 1),
        tap(() => {
            this._spinner$.next(true)
        }),
        debounceTime(1000),
        filter((val) => {
            const bool = this._lastSearchValue === val;
            if (!bool) {
                this._spinner$.next(false);
            }
            return bool;
        }),
        switchMap(this.Search.bind(this))
    );

    public _spinner$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        public http: HttpClient
    ) { }

    public getList(): Observable<ListModel[]> {
        return this.http.get<ListModel[]>('http://localhost:8000/v/list').pipe(
            map(data => {
                const _data = this.mapData(data);
                debugger
                this._list$.next(_data);
                return _data;
            })
        );
    }

    public getTopList(): Observable<ListModel[]>{
        return this.http.get<ListModel[]>('http://localhost:8000/v/toplist').pipe(
            map(data => {
                const _data = this.mapData(data);
                debugger
                this._list$.next(_data);
                return _data;
            })
        );
    }

    public goToSearch(value) {
        this.searchPost$.next(value);
    }

    public getCase(id: number): Observable<ListModel> {
        if (this._list$.getValue() === null) {
            this.getList().subscribe();
        }

        return this.list$.pipe(
            map(list => list.find(item => item.id === id))
        );
    }

    public reEmitList(): void {
        this._list$.next(this._list$.getValue());
        this.searchValue = null;
    }

    public Search(record: string): Observable<ListModel[]> {
        const point = this._list$.getValue();
        const point2 = of(point.filter(point => point.name.toLowerCase().indexOf(record.toLowerCase()) > -1));
        this._spinner$.next(false);
        this.searchValue = record;
        return point2;
    }

    mapData(data) {
        return data.map((item) => {
            return {
                name: item.name_auk,
                type: item.type_auk,
                info: item.info,
                idu: item.id_user,
                nameu: item.name_user,
                participal: item.participant,
                dateon: item.date_on,
                dateof: item.date_off,
                complete: item.complete,
                idc: item.id_comments,
                price: item.price,
                id: item.id,
            }
        });
    }

}
