import { Component , Input } from '@angular/core';

import { ReplyHandlerComponent } from '../reply-handler/reply-handler.component';
import { CommentComponent, } from '../comment/comment.component';
import { CommentaryReplyComponent } from '../commentary-reply/commentary-reply.component';
import { Reply } from '../Interfaces/Utils';



@Component({
  selector: 'app-comentary-handler',
  standalone: true,
  imports: [ReplyHandlerComponent,CommentComponent,CommentaryReplyComponent],
  templateUrl: './comentary-handler.component.html',
  styleUrl: './comentary-handler.component.css'
})

export class ComentaryHandlerComponent {
  replys : any  = []
  isReply:boolean = false


  @Input() comment = {
    id:          0,
    content:     "",
    createdAt:   "",
    score:       0,
    user:        {
      image: {
        png:  "",
        webp: ""
      },
      username: ''
    },
    replies:    [],
    replyingTo: ""
  }

  manageReplyStatus(replyStatus : boolean) : void{
    this.isReply = replyStatus
  }

  ngOnInit():void{
    if(this.comment.replies){
     this.replys = this.comment.replies
    }else{
      console.log('No se inicializo nada')

    }
    console.log(this.replys)
  }


}
