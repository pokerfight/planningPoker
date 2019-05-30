import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  sprint:string;

  constructor() { }

  setSprint(name) {
    this.sprint = name;
  }
}
