import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'TabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    
    auth.authenticationAnnounced$.subscribe(
      user => {
        if(!this.auth.isAuthenticated()){      
          this.navCtrl.setRoot("HomePage");
        }
      }
    )
  }

  goToHome(){
    this.navCtrl.setRoot("HomePage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
