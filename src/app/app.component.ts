import { Component, inject } from '@angular/core';
import {faCartPlus  , faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectApi';
  icon1=faHome;
  icon2=faCartPlus  ;


  


}
