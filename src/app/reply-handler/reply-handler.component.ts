import { Component, Input } from '@angular/core';
import { Comment, Reply } from '../Interfaces/Utils';
import { CommentComponent } from '../comment/comment.component';
import { ComentaryHandlerComponent } from '../comentary-handler/comentary-handler.component';
@Component({
  selector: 'app-reply-handler',
  standalone: true,
  imports: [ComentaryHandlerComponent],
  templateUrl: './reply-handler.component.html',
  styleUrl: './reply-handler.component.css'
})




export class ReplyHandlerComponent {

  @Input() replysData : any[] = []
  isReply : boolean = false

  ngOnInit():void{
    if(this.replysData){
      console.log(this.replysData)
    }
  }

  manageReplyStatus(replyStatus : boolean) : void{
    this.isReply = replyStatus
  }


}
