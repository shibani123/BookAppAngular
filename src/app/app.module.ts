import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AciStoreModule } from './acistore/aci-store.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AciStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
