import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    
  }

  title: string = "PokerFigth";
  message: string = "Qual o nome da luta ?";
  
  sprintName = '';

  redirectHome(){
    this.router.navigate(['/home']);

    this.loginService.setSprint(this.sprintName);
  }



}
