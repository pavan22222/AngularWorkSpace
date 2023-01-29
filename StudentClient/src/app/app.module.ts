import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './directives/structural-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives.component';
import { LogInComponent } from './login/log-in.component';
import { RegisterComponent } from './login/register/register.component';
import { OneWayBindingComponent } from './bindings/one-way-binding.component';
import { TwoWayBindingComponent } from './bindings/two-way-binding.component';
import { MVVMComponent } from './bindings/mvvm.component';
import { EventBindingComponent } from './events/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    LogInComponent,
    RegisterComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent,
    MVVMComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MVVMComponent]
})
export class AppModule { }
