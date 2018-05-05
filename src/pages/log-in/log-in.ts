import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LogInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  user= { email : '', password : ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogInPage');
  }

  SingIn(){

    this.auth.singInUser(this.user.email,this.user.password)
    .then((user) => {
      this.app.getRootNav().setRoot(TabsPage);
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  goToRegisterPage(){

    this.navCtrl.push('RegisterPage');

  }

  

}
