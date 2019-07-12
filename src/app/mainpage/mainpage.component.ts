import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  items: any;

  constructor(private fireStore: AngularFirestore) {}

  ngOnInit() {
    this.fireStore.collection('makaleler').valueChanges()
      .subscribe(res => {
        this.items = res;
        console.log(res);
      });
  }
}
