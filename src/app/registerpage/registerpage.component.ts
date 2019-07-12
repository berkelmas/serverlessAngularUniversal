import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  handleRegister(form: NgForm) {
    this.fireAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => {
        this.router.navigate(['']);
      })
      .catch(err => console.log(err));
  }
}
