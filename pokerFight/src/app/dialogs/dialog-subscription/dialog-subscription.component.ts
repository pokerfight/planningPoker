import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IparticipantsData } from '../interfaces/IparticipantsData'

@Component({
  selector: 'app-dialog-subscription',
  templateUrl: './dialog-subscription.component.html',
  styleUrls: ['./dialog-subscription.component.css']
})

export class DialogSubscriptionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSubscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IparticipantsData
  ) { }

  squads = [
    {value: 'sesc', viewValue: 'Sesc'},
    {value: 'potencial', viewValue: 'Potencial'},
    {value: 'ibCapital', viewValue: 'IB Capital'}
  ];

  ngOnInit() {
  }
}
