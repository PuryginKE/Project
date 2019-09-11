import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.servise';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {
  
  public caseForm: FormGroup;

  constructor(
    public service: PostService, private router: Router
  ) { }

  ngOnInit() {
    this.caseForm = new FormGroup({
      name: new FormControl(''),
      type: new FormControl(''),
      info: new FormControl(''),
      dateon: new FormControl(''),
      dateoff: new FormControl(''),
      price: new FormControl('')
    });
  }
  public onCreateCase(): void {
   
    const data = this.caseForm.getRawValue();
    console.log(data);
   // const data = this.registrForm.getRawValue();
    this.service.createPost(data).subscribe((res) => {
      this.goList();
    }, (err) => {
      
      // тут ошибка сервера
      console.error(err);
      debugger
    }) 
  }

  goList(){
         
    this.router.navigate(['/list']);
  }
}
