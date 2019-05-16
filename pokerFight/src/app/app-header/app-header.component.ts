import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  projectName: string = 'PokerFigth';
  sprintName: string = 'sprint 4';
  buttonName: string = 'X Finalizar';

  ngOnInit() {
  }

}
