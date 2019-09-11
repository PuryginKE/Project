import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RegisterModel} from 'src/app/models/registr.model';
import { CreateModel } from '../models/create.model';

@Injectable()
export class PostService {

 //    serv1 = 'http://yourtender.site/api/create';
 //    serv2 = 'http://localhost:3000/v/create';
 //    serv3 = 'http://yourtender.site/api/entercase';
 //    serv4 = 'http://localhost:3000/v/entercase';

    constructor(
        public http: HttpClient
    ) { }

    public createPost(data: any): Observable<CreateModel[]> {
        return this.http.post<CreateModel[]>('http://localhost:8000/v/create', data);

    }

    public updatePost(data: any): Observable<CreateModel[]> {
        return this.http.put<CreateModel[]>('http://localhost:8000/v/ucase', data);
        debugger
    }


}
