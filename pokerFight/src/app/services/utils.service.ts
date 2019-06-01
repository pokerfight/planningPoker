import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  _id: number = -1;

  constructor() { }

  getContador() {
    this._id = this._id + 1;

    return this._id;
  }
}
