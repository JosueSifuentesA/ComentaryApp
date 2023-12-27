import { Component , Input, ElementRef } from '@angular/core';

import { CommentComponent, } from '../comment/comment.component';
import { ComentaryFormComponent } from '../comentary-form/comentary-form.component';

@Component({
  selector: 'app-comentary-handler',
  standalone: true,
  imports: [CommentComponent,ComentaryFormComponent],
  templateUrl: './comentary-handler.component.html',
  styleUrl: './comentary-handler.component.css'
})

export class ComentaryHandlerComponent {
  replys : any  = []
  isReply:boolean = false

  buttonAction : string = ''

  @Input() isReplying : boolean = false

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

  constructor(private el : ElementRef){}

  manageReplyStatus(replyStatus : boolean) : void{
    this.isReply = replyStatus
  }

  ngOnInit():void{
    console.log(this.el.nativeElement)
    if(this.comment.replies){
     this.replys = this.comment.replies
    }
  }


}
