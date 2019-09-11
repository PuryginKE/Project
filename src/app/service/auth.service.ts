import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RegisterModel} from 'src/app/models/registr.model';

@Injectable()
export class AuthService {
    public isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        public http: HttpClient
    ) { }

    public registr(data: any): Observable<RegisterModel[]> {

        return this.http.post<RegisterModel[]>('http://localhost:8000/v/registr', data);

    }

   /*
    postReg(body:Regist): Observable<RegisterModel[]>{

        return this.http.post<RegisterModel[]>('http://195.133.147.206:3000/v/registr', body);
        debugger
    }
    */
   public enter(data: any): Observable<RegisterModel[]> {
    return this.http.post<RegisterModel[]>('http://localhost:8000/v/enter', data);
    debugger
    console.log(this.http.post('http://yourtender.site/api/registr', data));
    }

    public logout(data: any): Observable<RegisterModel[]> {
        return this.http.post<RegisterModel[]>('http://localhost:8000/v/logout', data);
        debugger
        console.log(this.http.post('http://yourtender.site/api/registr', data));
    }
}
