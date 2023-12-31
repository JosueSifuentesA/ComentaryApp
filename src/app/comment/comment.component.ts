import { Component,Output,Input, EventEmitter } from '@angular/core';
import { ComentaryServiceService } from '../Services/comentary-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  constructor(private comentaryService : ComentaryServiceService){
    this.isReply = false
  }

  @Input() comentaryData = {
    id: 0,
    content: "",
    createdAt: "",
    score: 0,
    user: {
      image: {
        png: "",
        webp: ""
      },
      username: ''
    },
    replies: [],
    replyingTo: ""
  }

  @Output() replyChange = new EventEmitter<boolean>()
  comentaryServiceStatus : boolean = false
  isReply :boolean



  emitReplyChange(value : boolean){
    this.replyChange.emit(value)
  }

  setReply() : void{
    if(this.comentaryServiceStatus == false){
      console.log(this.isReply)
      this.isReply = true
      console.log(this.isReply + " " +  this.comentaryData.content)
      this.emitReplyChange(this.isReply)
      this.comentaryService.setReplyStatusData(this.isReply)
    }
  }

  discardReply():void{
    if(this.comentaryServiceStatus == true && this.isReply == true){
      this.isReply = false
      console.log(this.isReply + " " +  this.comentaryData.content)
      this.emitReplyChange(this.isReply)
      this.comentaryService.setReplyStatusData(this.isReply)
    }
  }

  ngOnInit(){
    this.comentaryService.replyStatusObservable$.subscribe((statusValue)=>{
      this.comentaryServiceStatus = statusValue
    })
  }



}
