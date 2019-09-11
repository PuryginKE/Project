import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { nextContext } from '@angular/core/src/render3';
import { __param } from 'tslib';
import { Subscription } from 'rxjs';
import { ListModel } from 'src/app/models/list.model';
import { ListService } from 'src/app/service/list.service';
import { PostService } from 'src/app/service/post.servise';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],

})
export class CaseComponent implements OnInit {
  public data: ListModel;

  private subscription: Subscription;
  constructor(private httpService:ListService, private activateRoute: ActivatedRoute, public postServis: PostService ) {
    this.subscription = activateRoute.params.subscribe(params=> {
      this.httpService.getCase(+params.id).subscribe(data => {
        this.data = data;
      });
    });
  }

  ngOnInit() {

  }

  public onEnterCase(e: any){
    this.postServis.updatePost(this.data).subscribe();
    debugger
  }
}
