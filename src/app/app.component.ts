import { Component } from '@angular/core';
import { NavserviceService } from './navservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myMatdesign';
    constructor(private nav:NavserviceService){
 
    this.nav.hide();
  
  }
 

}
