import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class ComentaryServiceService {

  private replyStatusSubject = new BehaviorSubject<boolean>(false)
  replyStatusObservable$ = this.replyStatusSubject.asObservable()

  constructor(private httpClient : HttpClient , private httpModule : HttpClientModule){}


  setReplyStatusData(value: boolean): void {
    this.replyStatusSubject.next(value);
  }

  updatePostComments() : void{

  }

  getPostComments(): Observable<any>{
    return this.httpClient.get<any>("/assets/Data/data.json")
  }


}
