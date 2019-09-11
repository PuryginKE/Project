import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscriber, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public enterForm: FormGroup;

  constructor(
    public service: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.enterForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    });

  }
 
    public onSubmitEnter(): void {
   
    const data = this.enterForm.getRawValue();
    console.log(data);
   // const data = this.registrForm.getRawValue();
    this.service.enter(data).subscribe((res) => {
      this.service.isAuth$.next(true);
      debugger
      this.goHome();
      // тут ответ сервера после успешной регистрации
      console.log(res);
      console.log(this.service.registr(data));
      debugger
    }, (err) => {
      this.service.isAuth$.next(false);
      // тут ошибка сервера
      console.error(err);
      debugger
    }) 
  }
  goHome(){
         
    this.router.navigate(['']);
  }
}
