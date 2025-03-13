import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { Parent2Component } from './components/child_to_parent_communication/parent2/parent2.component';
import { Child2Component } from './components/child_to_parent_communication/child2/child2.component';
import { Parent3Component } from './components/child_to_child_communication/parent3/parent3.component';
import { Childa3Component } from './components/child_to_child_communication/childa3/childa3.component';
import { Childb3Component } from './components/child_to_child_communication/childb3/childb3.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    Parent3Component,
    Childa3Component,
    Childb3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
