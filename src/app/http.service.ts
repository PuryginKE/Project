import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from './models/post.model';


@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }

    getData(): Observable<PostModel[]>{
        return this.http.get<PostModel[]>('http://yourtender.site/api/get_post');
    }
}
