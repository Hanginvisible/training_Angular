import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule, MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserComponentComponent } from './user-component/user-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatSortModule,
    NgbModule,
    FormsModule,
    NotifierModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
