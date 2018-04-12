import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  private currentUser:any;

  constructor() { }

  ngOnInit() {
    let u =  firebase.auth().currentUser;

    if(u){
      this.currentUser = u.email;
    } else {
      console.log('Not logged in');
    }
    
  }

  private logout(){
    firebase.auth().signOut();
  }

}
