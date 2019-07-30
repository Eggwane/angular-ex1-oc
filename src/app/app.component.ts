import { Component } from '@angular/core';
import { Post } from "./post/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
           new Post("post1","blabla"),
           new Post("post2", "tata"),
           new Post("post3","titi")
         ];
}
