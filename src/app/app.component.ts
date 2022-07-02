import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = "Hello Angular Framework!";
showMsz = true;
day = "Sunday";
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
color = 'red';
}
