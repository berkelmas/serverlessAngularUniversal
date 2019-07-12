import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private authFire: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  handleLogin(form: NgForm) {
    this.authFire.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => this.router.navigate(['']))
      .catch(err => console.log(err));
  }

}
