import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    data: {},
    message: ''
  }

  constructor(private route: Router) {

  }

  signIn() {
    console.log('Login Id: ', this.form.data.loginId)
    console.log('Password: ', this.form.data.password)
    if (this.form.data.loginId == 'admin' && this.form.data.password == 'admin') {
      this.route.navigateByUrl('welcome')
    } else {
      this.form.message = 'login & password invalid'
    }
  }

  signUp() {
    this.route.navigateByUrl('signup')
  }
}
