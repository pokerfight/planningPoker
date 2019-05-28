import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  title: string = "PokerFigth";
  message: string = "Qual o nome da luta ?";
  
  sprintName = '';

  redirectHome(){
    this.router.navigate(['/home']);
  }

}
