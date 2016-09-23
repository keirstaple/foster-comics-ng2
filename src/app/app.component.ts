import { Component } from '@angular/core';

export class Comic{
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Foster Comics';
  comic: Comic = {
    id: 1;
    title: 'Slice Vol. 1';
    author: 'Foster Woodburn';
  };
}
