import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DetailComponent } from './detail/detail.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule}from '@angular/material/card';
import { IgxAvatarModule } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    IgxAvatarModule,
    BrowserModule,
      RouterModule,
      MatListModule,
      FormsModule,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    FlexLayoutModule,
    RouterModule,

  ],
  providers: [ { provide: MatPaginatorIntl, useClass:  TableComponent}],
  bootstrap: [AppComponent]
})
export class AppModule { }


