import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PostCommentSectionComponent } from './post-comment-section/post-comment-section.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PostCommentSectionComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'ComentApp';
  dataPost : any

  constructor(private httpClient : HttpClient){}

  ngOnInit(){
    //this.httpClient.get("assets/Data/data.json").subscribe(d=> this.dataPost = d)
  }


}
