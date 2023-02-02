import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './forms/reactive-form.component';
import { LogInComponent } from './login/log-in.component';
import { RegisterComponent } from './login/register/register.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  //{path:'',component:ReactiveFormComponent},
  {path:'login',component:LogInComponent},
  {path:'list/:id/:name/:age',component:StudentListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
