import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
   form:FormGroup;
    user :any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.form = new FormGroup({})
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  next(){
    this.navCtrl.push(LoginPage);
  }
  booking(){
    this.navCtrl.push(HomePage)
  }

}
