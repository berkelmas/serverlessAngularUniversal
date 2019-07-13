import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-addmakalepage',
  templateUrl: './addmakalepage.component.html',
  styleUrls: ['./addmakalepage.component.scss']
})
export class AddmakalepageComponent implements OnInit {
  public Editor = ClassicEditor;
  
  sentFailed: boolean = false;
  sentSuccess: boolean = false;

  constructor(private fireStore: AngularFirestore) {}

  ngOnInit() {
  }
  handleMakaleSubmit(form: NgForm) {
    this.fireStore.collection('makaleler').add({
      makale_baslik : form.value.makale_baslik,
      makale_mesaj : form.value.makale_mesaj,
      makale_yayintarihi : form.value.makale_yayintarihi,
      makale_kategori : form.value.makale_kategori,
      makale_meta_description : form.value.makale_meta_description
    })
    .then(res => {
      this.sentSuccess = true;
      setTimeout(() => {this.sentSuccess = false}, 2000);
      form.reset();
    })
    .catch(err => {
      this.sentFailed = true;
      setTimeout(() => {this.sentFailed = false}, 2000);
    });
  }
}
