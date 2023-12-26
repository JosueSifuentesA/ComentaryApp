import { Component,Output,Input, EventEmitter } from '@angular/core';
import { ComentaryServiceService } from '../Services/comentary-service.service';


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  constructor(private comentaryService : ComentaryServiceService){}

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
  isReply :boolean = false

  setReply() : void{
    this.isReply = !this.isReply
    this.replyChange.emit(this.isReply)
  }

}
