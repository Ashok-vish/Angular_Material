import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { CONTACTComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import { TaskLifecycleComponent } from './task-lifecycle/task-lifecycle.component';
import { TChildComponent } from './t-child/t-child.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CONTACTComponent,
    AboutComponent,
    TaskLifecycleComponent,
    TChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTableModule
  ],


  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { 
  
}
