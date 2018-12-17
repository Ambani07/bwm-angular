import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentTitle = 'I am component title';

  clickHandler(){
    alert("I AM CLICKED");
  }
}

