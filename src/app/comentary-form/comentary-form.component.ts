import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComentaryServiceService } from '../Services/comentary-service.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-comentary-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './comentary-form.component.html',
  styleUrl: './comentary-form.component.css'
})
export class ComentaryFormComponent {

  @Output() replyComentaryForm = new EventEmitter<boolean>()
  @Input() isReplying : boolean = false
  @Input() comentaryId : number | undefined
  buttonAction: any;
  comentario:any

  comentarios = {}

  constructor(private comentaryService : ComentaryServiceService ){}

  descartarComentario(event : Event):void{
    event.preventDefault()
    this.comentaryService.setReplyStatusData(false)
    this.replyComentaryForm.emit(false)
  }

  enviarComentario(){
    console.log(this.comentario)
    this.comentaryService.getPostComments().subscribe((d)=>{
      this.comentarios = d
      console.log(this.comentarios+ " " + this.comentaryId)
    })
  }


  ngOnInit(){
    if(this.isReplying){
      this.buttonAction = 'REPLY'
    }else{
      this.buttonAction = 'SEND'
    }
  }



}
