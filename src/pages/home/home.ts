import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RequestPage } from '../request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  req(){
    this.navCtrl.push(RequestPage);
  }

}
