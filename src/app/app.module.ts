import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ViewComponent}from './view/view.component';
import {LoginComponent}from './login/login.component';
import {ChildrenComponent}from './children/children.component';
import {DetailsComponent}from './details/details.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ChildrenComponent,
    LoginComponent,
    ViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
