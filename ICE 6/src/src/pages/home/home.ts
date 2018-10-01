import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login'
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private camera: Camera) {
  
    }
    
    
  logout(){
  this.navCtrl.push(LoginPage)

  }
  
  

}
