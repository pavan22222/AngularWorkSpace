import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './forms/reactive-form.component';
import { AuthGaurd } from './gaurds/auth.gaurd';
import { LogInComponent } from './login/log-in.component';
import { RegisterComponent } from './register/register.component';
import { ObservableTestComponent } from './observable/observable-test.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PromiseTestComponent } from './promise/promise-test.component';
import { AdminGuard } from './gaurds/admin.guard';
import { SaveGuard } from './gaurds/save.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',component:ObservableTestComponent},
  { path: 'login', component: LogInComponent },
  { path: 'studentList/:id/:name/:age', component: StudentListComponent,canActivate:[AuthGaurd] ,
  canActivateChild:[AdminGuard],
   children:[
    {path:'details/:id',component:StudentDetailsComponent}
   ]},
  { path: 'reactive', component: ReactiveFormComponent,canDeactivate:[SaveGuard] },
  {path:'**',component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
