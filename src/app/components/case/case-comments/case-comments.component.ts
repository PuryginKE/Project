import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.servise';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-case-comments',
  templateUrl: './case-comments.component.html',
  styleUrls: ['./case-comments.component.css']
})
export class CaseCommentsComponent implements OnInit {
  public selected: boolean;

  constructor(public httpServise: PostService, public postServise: ListService) { }

  ngOnInit() {
  }



  public onApply(): void {
    this.selected = !this.selected;
  }

}
