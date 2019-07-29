import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  status: any = {
    "moreCrafters": true,
    "startTimer": false,
    "cont": 0
  }

 
  _id: number = -1;

  constructor() { }

  getContador() {
    this._id = this._id + 1;

    return this._id;
  }


  emitirStatus = new EventEmitter<Boolean>()

  finalizeCrafterInput() {
    this.status.moreCrafters = false;
    this.status.cont++;
    if (this.status.cont === 2) {
      this.status.startTimer = true;
    }

    this.emitirStatus.emit(this.status);
  }

}
