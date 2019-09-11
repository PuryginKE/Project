import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { Data } from '@angular/router';
import { RegistService } from './registr.service';
import { RegisterModel } from 'src/app/models/registr.model';
import { AuthService } from 'src/app/service/auth.service';
//import { Regist } from 'src/app/models/registr.model';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {


  public registrForm: FormGroup;
/*
  registrForm = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  */
  //login: RegisterModel[];
  //password: RegisterModel[];
  //reg = new Regist();
  constructor(
    public service: AuthService
  ) { }

  ngOnInit() {
    
    this.registrForm = new FormGroup({
      login: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
   
    //const data = this.registrForm.getRawValue();
  //  this.service.postReg().subscribe(data => this.login=data, data => this.password=data);
  }
  /*  addRegistr(): void {
      this.service.postReg(this.reg).subscribe(data => this.login=data, data => this.password=data);
    } */
  public onSubmitRegister(): void {
   
    const data = this.registrForm.getRawValue();
    console.log(data);
   // const data = this.registrForm.getRawValue();
    this.service.registr(data).subscribe((res) => {
      // уходит
      debugger
      // тут ответ сервера после успешной регистрации
      console.log(res);
      console.log(this.service.registr(data));
    }, (err) => {
      // тут ошибка сервера
      console.error(err);
      debugger
    }) 
  }
  
}
