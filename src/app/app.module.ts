import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { DitalsComponent } from './ditals/ditals.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartproductsComponent } from './cartproducts/cartproducts.component';


@NgModule({
  declarations: [
    AppComponent,
    ListproductComponent,
    DitalsComponent,
    CartproductsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
