import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ParticipantsService {

  participants;

  private crafters = [];
  private craftersUpdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  getCrafters() {
    this.http
      .get<{ message: string; crafters: any }>(
        "http://localhost:3000/api/crafters"
      )
      .pipe(map((postData) => {
        return postData.crafters.map(post => {
          return {
            name: post.name,
            squad: post.squad,
            id: post._id
          };
        });
      }))
      .subscribe(transformedCrafters => {
        this.crafters = transformedCrafters;
        this.craftersUpdated.next([...this.crafters]);
      });
  }

  getCrafterUpdateListener() {
    return this.craftersUpdated.asObservable();
  }

  addCrafter(name: string, squad: string) {
    const crafter = { id: null, name: name, squad: squad };
    this.http
      .post<{ message: string, postId: string }>("http://localhost:3000/api/crafters", crafter)
      .subscribe(responseData => {
        const id = responseData.postId;
        crafter.id = id;
        this.crafters.push(crafter);
        this.craftersUpdated.next([...this.crafters]);
      });
  }

  deleteCrafter(postId: string) {
    this.http.delete("http://localhost:3000/api/crafters/" + postId)
      .subscribe(() => {
        const updatedCrafters = this.crafters.filter(post => post.id !== postId);
        this.crafters = updatedCrafters;
        this.craftersUpdated.next([...this.crafters]);
      });
  }
}
