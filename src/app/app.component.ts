import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<h1>This is a template</h1>',
  styleUrls: ['./app.component.scss'],
  //styles: [ 'h1 { color: red; }']
})
export class AppComponent {
  title = 'chatModule';
  /*items: Observable<any[]>;
  constructor(firestore: AngularFirestore){
      this.items = firestore.collection('items').valueChanges();
  }*/
}
