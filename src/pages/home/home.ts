import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'HomePage'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {

    auth.authenticationAnnounced$.subscribe(
      user => {
        console.log("User Information");
        console.log(user);
        if(this.auth.isAuthenticated()){      
          this.navCtrl.setRoot("TabsPage");
        }
      }
    )
  }



  goToTabs(){
    this.navCtrl.setRoot("TabsPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    if(this.auth.isAuthenticated()){      
      this.navCtrl.setRoot("TabsPage");
    } 
  }
}
