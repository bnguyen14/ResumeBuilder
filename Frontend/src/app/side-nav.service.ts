import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private matDrawer: MatDrawer;

  constructor() { }

  setDrawer(drawer:MatDrawer){
    this.matDrawer=drawer;
  }

  toggle(){
    this.matDrawer.toggle();
  }
}
