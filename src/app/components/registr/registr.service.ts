import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RegisterModel} from 'src/app/models/registr.model';

@Injectable()
export class RegistService {

    constructor(
        public http: HttpClient
    ) { }

    public registr(data: any): Observable<RegisterModel[]> {
        return this.http.post<RegisterModel[]>('http://yourtender.site/api/registr', data);
        debugger
        console.log(this.http.post('http://yourtender.site/api/registr', data));
    }

   /*
    postReg(body:Regist): Observable<RegisterModel[]>{

        return this.http.post<RegisterModel[]>('http://195.133.147.206:3000/v/registr', body);
        debugger
    }
    */
}
