import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Request added successfully',
      showCloseButton: true,
    });
    toast.present();
  }

}
