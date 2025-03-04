import { Component } from '@angular/core';

import {CapacitorFlash}  from '@capgo/capacitor-flash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public active:boolean = false;

  constructor() {}

  flash():void{
    this.active = !this.active;

    if(this.active){
      CapacitorFlash.switchOn({
        intensity:100
      });
    }else{
      CapacitorFlash.switchOff();
    }

  }

}
