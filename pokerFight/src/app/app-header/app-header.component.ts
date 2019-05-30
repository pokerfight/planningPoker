import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  projectName: string = 'PokerFigth';
  sprintName: string;
  buttonName: string = 'X Finalizar';

  ngOnInit() {
    this.sprintName = this.loginService.sprint;
  }

}
