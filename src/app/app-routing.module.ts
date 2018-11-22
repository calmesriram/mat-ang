import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 
  {
    path:'home',
    component:HomeComponent
  }, 
  {
   path:'singup' ,
   component:SingupComponent
  },
  {
    path:'login' ,
    component:LoginComponent
  },
  {
    path:'',
    redirectTo:'/singup',
    pathMatch:'full'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
