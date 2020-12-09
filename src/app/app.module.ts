import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {DemoMaterialModule} from './app/material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { CommonModule } from '@angular/common'; 
// import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
    // FlexLayoutModule,
    // DemoMaterialModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
