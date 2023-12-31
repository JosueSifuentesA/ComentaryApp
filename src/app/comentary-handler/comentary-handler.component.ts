import { Component , Input, ElementRef } from '@angular/core';

import { CommentComponent, } from '../comment/comment.component';
import { ComentaryFormComponent } from '../comentary-form/comentary-form.component';
import { ComentaryServiceService } from '../Services/comentary-service.service';

@Component({
  selector: 'app-comentary-handler',
  standalone: true,
  imports: [CommentComponent,ComentaryFormComponent],
  templateUrl: './comentary-handler.component.html',
  styleUrl: './comentary-handler.component.css'
})

export class ComentaryHandlerComponent {
  replys : any  = []

  comentaryForm:boolean = false
  replyStatus : boolean = false
  @Input() id : number | undefined
  buttonAction : string = ''

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

  constructor(private el : ElementRef,private comentaryService : ComentaryServiceService){

  }

  manageReplyStatus(value : boolean) : void{
    this.comentaryForm = value
    console.log( "Status de  FORMULARIO DE RESPUESTA " + this.comentaryForm)
  }

  ngOnInit():void{
    if(this.comment.replies){
      this.replys = this.comment.replies
    }
    this.comentaryService.replyStatusObservable$.subscribe(d=>{
      this.replyStatus = d
    })
  }


}
