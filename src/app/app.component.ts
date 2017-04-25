import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private items =[1,2,3,4,5];

  private switch = true;

  private value = 10;

  onSwitch(){

    this.switch = !this.switch;
  }
}
