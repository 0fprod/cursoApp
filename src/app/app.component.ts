import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDADw6xUnhuli_g5Z9KFxdw4At3jNb0Zu8",
      authDomain: "cursoapp-ed595.firebaseapp.com"  
    });
  }

}
