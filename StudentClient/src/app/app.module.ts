import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { MouseEventsComponent } from './events/predefined-events.component';
import { ChildComponent } from './events/child.component';
import { ParentComponent } from './events/parent.component';
import { StudentService } from './services/student.service';
import { StudentListComponent } from './student-list/student-list.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstComponentComponent } from './lifecycle/first-component.component';
import { SecondComponentComponent } from './lifecycle/second-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ReactiveFormComponent } from './forms/reactive-form.component';

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
    EventBindingComponent,
    MouseEventsComponent,
    ChildComponent,
    ParentComponent,
    StudentListComponent,
    FilterListComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    PipesComponent,
    FilterPipe,
    SortPipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
