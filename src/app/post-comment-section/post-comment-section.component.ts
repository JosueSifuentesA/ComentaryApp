import { Component , Input } from '@angular/core';

import { ReplyHandlerComponent } from '../reply-handler/reply-handler.component';
import { ComentaryFormComponent } from '../comentary-form/comentary-form.component';
import { CommentaryReplyComponent } from '../commentary-reply/commentary-reply.component';
import { ComentaryHandlerComponent } from '../comentary-handler/comentary-handler.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Comment, Image } from '../Interfaces/Utils';
@Component({
  selector: 'app-post-comment-section',
  standalone: true,
  imports: [ComentaryFormComponent,ReplyHandlerComponent,CommentaryReplyComponent,ComentaryHandlerComponent,HttpClientModule],
  templateUrl: './post-comment-section.component.html',
  styleUrl: './post-comment-section.component.css'
})
export class PostCommentSectionComponent {

  @Input() comments : Comment[] = [{
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
}]

  dataPost : any

  comment : any[] = []

  constructor(private httpClient : HttpClient){}

  ngOnInit(){
    this.httpClient.get("assets/Data/data.json").subscribe(d=> {
      this.dataPost = d
      this.comment = this.dataPost.comments
      console.log(d)
      console.log(this.comment)
    })


  }

}
