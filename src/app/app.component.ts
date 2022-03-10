import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularPractise';
  name:any = " ";
  img = "assets/images.png";
  colorVal = "yellow";
  bgColor = "green";
  width="150px";
  classValue = "one";
}
