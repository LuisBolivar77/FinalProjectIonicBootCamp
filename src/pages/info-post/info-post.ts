import { Post } from './../../app/post.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-post',
  templateUrl: 'info-post.html',
})
export class InfoPostPage {

  postObtenido: Post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.postObtenido = this.navParams.get('postEnviar');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPostPage');
  }

}
