export class Post{
  title: string;
  content: string;
  loveIts: number = 0;
  created_at: Date = new Date();

  constructor(title:string, content:string){
      this.title=title;
      this.content=content;
  }
}
