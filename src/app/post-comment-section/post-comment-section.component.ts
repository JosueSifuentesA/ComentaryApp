import { Component , Input } from '@angular/core';

import { ComentaryFormComponent } from '../comentary-form/comentary-form.component';
import { CommentaryReplyComponent } from '../commentary-reply/commentary-reply.component';
import { ComentaryHandlerComponent } from '../comentary-handler/comentary-handler.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Comment, Image } from '../Interfaces/Utils';
import { ComentaryServiceService } from '../Services/comentary-service.service';
@Component({
  selector: 'app-post-comment-section',
  standalone: true,
  imports: [ComentaryFormComponent,CommentaryReplyComponent,ComentaryHandlerComponent,HttpClientModule],
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

  constructor(private httpClient : HttpClient , private comentaryService: ComentaryServiceService){}

  ngOnInit(){
    this.dataPost = this.comentaryService.getPostComments().subscribe(d=>{
      this.dataPost = d
      this.comment = this.dataPost.comments
    })
  }

}
