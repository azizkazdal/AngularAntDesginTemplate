import { Component } from '@angular/core';

import { AuthenticationService } from "./_services";
import { User } from "./_models";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  constructor() {

  }

}
