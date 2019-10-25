import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule,MatToolbarModule,MatButtonModule,MatCardModule,MatGridListModule,MatListModule,MatIconModule,MatChipsModule,MatBadgeModule} from '@angular/material';
import { HeaderComponent } from './shared/header/header.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HttpClientModule } from '@angular/common/http';
import { CartlistComponent } from './cartlist/cartlist.component';
import {MatSnackBarModule} from '@angular/material';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductlistComponent,
    PagenotfoundComponent,
    ShoppinglistComponent,
    CartlistComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  exports: [MatButtonModule],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
