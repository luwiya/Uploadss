import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon:'home'},
    { title: 'Medicines', url: '/medicines', icon:'medkit'},
    { title: 'Records', url: '/records', icon:'document'},
    { title: 'About', url: '/about', icon:'alert'},
  ];
  constructor() {}
}
