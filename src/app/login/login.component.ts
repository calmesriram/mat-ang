import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder, NgForm} from '@angular/forms';
import {Router} from "@angular/router";
import { NavserviceService } from '../navservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  // username:String='';
  // password:String='';

  constructor(private formbuilder:FormBuilder ,private router:Router,private nav:NavserviceService) {
    this.login = formbuilder.group({
      username:['',[Validators.required,Validators.nullValidator]],
      password:['',[Validators.required,Validators.minLength(4)]]
    });
   }

  ngOnInit() {
  }
mylogin(form:NgForm)
{
  console.log(form);
  console.log(form['username']=="admin",form['password'] =="admin");
  if(form['username']=="admin" && form['password'] =="admin"){
  this.nav.show();
    this.router.navigate(['/home']);
  }
  this.login.reset();
}
}
