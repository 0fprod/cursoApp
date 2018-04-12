import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  private onSave() {
    let user = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.auth.loginUser(user)
    .then(
      (res) =>{
        console.log('LoggedIn: ', res);
        this.router.navigate(['autenticacion/route'])
      }
    )
    .catch(
      (err) =>{
        console.log('Err ', err);
      }
    )
  }

}
