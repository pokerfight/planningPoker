import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { UtilsService} from '../services/utils.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})

export class AppHeaderComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private _utils : UtilsService
  ) {}

  projectName: string = 'PokerFigth';
  sprintName: string;
  buttonNameFinish: string = 'X Finalizar';
  buttonNameParticipate: string = 'Participar'

  moreCrafters: boolean = true;


  ngOnInit() {
    this.sprintName = this.loginService.sprint;

    this._utils.emitirStatus.subscribe( status => {
        this.moreCrafters = status.moreCrafters;
      })

  }

}
