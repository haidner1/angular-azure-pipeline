import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DokumentationComponent } from './dokumentation/dokumentation.component';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TestsComponent } from './tests/tests.component';
import { WeiterbildungComponent } from './weiterbildung/weiterbildung.component';
import { LaborComponent } from './labor/labor.component';

const appPoutes: Routes = [
  {path: 'software', component: SoftwareComponent},
  {path: 'dokumentation', component: DokumentationComponent},
  {path: 'weiterbildung', component: WeiterbildungComponent},
  {path: 'tests', component: TestsComponent},
  {path: 'labor', component: LaborComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: '', redirectTo: '/software', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DokumentationComponent,
    HomeComponent,
    SoftwareComponent,
    PageNotFoundComponent,
    ImpressumComponent,
    TestsComponent,
    WeiterbildungComponent,
    LaborComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appPoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
