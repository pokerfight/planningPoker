import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ChatService]
})

export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private _chatService: ChatService
    ) { }

  ngOnInit() {
    
  }

  title: string = "PokerFigth";
  message: string = "Qual o nome da luta ?";
  
  sprintName = '';

  redirectHome(){
    this.router.navigate(['/home']);
  }

}
