import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() { }

  registerUser(userdata){
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password)
    .catch((err) => {
      console.log('Err on register ,', err);
    })
  }

  loginUser(userdata){
    return firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password);    
  }
}
