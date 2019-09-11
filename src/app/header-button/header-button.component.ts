import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent implements OnInit {

  constructor(
    public authService: AuthService, private router: Router
  ) { }
  
  ngOnInit() {

  }

   
  public onExit(): void {
   
    
  
      this.authService.isAuth$.next(false);
      this.goHome();
    
  }
  goHome(){
         
    this.router.navigate(['']);
  }

}
