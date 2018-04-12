import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  private onSave() {
    let user = { 
      email: this.form.value.email, 
      password: this.form.value.password 
    };

    this.auth.registerUser(user);
    console.log('Te has registrado');
    
  }

}
