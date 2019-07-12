import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  loggedInState: boolean;
  items: any;

  constructor(private fireStore: AngularFirestore, private authFire: AngularFireAuth ) {}

  ngOnInit() {
    this.fireStore.collection('makaleler').valueChanges()
      .subscribe(res => {
        this.items = res;
        console.log(res);
      });

    this.authFire.authState.subscribe(res => res ? this.loggedInState = true : this.loggedInState = false);
  }

  handleLogout() {
    this.authFire.auth.signOut();
  }
}
