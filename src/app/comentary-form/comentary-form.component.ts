import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comentary-form',
  standalone: true,
  imports: [],
  templateUrl: './comentary-form.component.html',
  styleUrl: './comentary-form.component.css'
})
export class ComentaryFormComponent {

  @Input() isReplying : boolean = false
  buttonAction: any;

  ngOnInit(){
    if(this.isReplying){
      this.buttonAction = 'REPLY'
    }else{
      this.buttonAction = 'SEND'
    }
  }

}
