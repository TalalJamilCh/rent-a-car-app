import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user :any ={'email':"",'password':"",'name':""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  page(){
    this.navCtrl.push(SignupPage);
  }
  booking(){
    this.navCtrl.push(HomePage);
  }


}
