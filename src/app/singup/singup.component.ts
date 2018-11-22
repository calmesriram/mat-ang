import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup,FormBuilder, NgForm} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  // private status:Boolean=true;
  regit:FormGroup;
  // email:String='';
  // username:String='';
  // password:String='';

  constructor(private formBuilder: FormBuilder) 
  { 
    this.regit = formBuilder.group({
      email :  ['', [Validators.required, Validators.email]],
      username :  ['', [Validators.required]],
      password :  ['',[Validators.minLength(4),Validators.required]] 
    })
  }

  
  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.regit.get(field).valid && this.regit.get(field).touched) ||
  //     (this.regit.get(field).untouched)
  //   );
  // }

  ngOnInit() {
  }


  onFormSubmit(form :NgForm){
    console.log(form);
    this.regit.reset();    
      }
}
