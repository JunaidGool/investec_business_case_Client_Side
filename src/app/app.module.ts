import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { LimitsService } from './services/limits.service';
import { RelationshipsService } from './services/relationships.service';

import { AboutComponent } from './components/about/about.component';
import { LimitsComponent } from './components/limits/limits.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'

const appRoutes: Routes = [
  {path:'', component: UserComponent},
  {path:'about', component: AboutComponent},
  {path:'limits', component: LimitsComponent},
  {path:'relationships', component: RelationshipsComponent},
  {path:'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    LimitsComponent,
    RelationshipsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LimitsService, 
    RelationshipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
