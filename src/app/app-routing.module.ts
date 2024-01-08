import { ListproductComponent } from './listproduct/listproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DitalsComponent } from './ditals/ditals.component';
import { AppComponent } from './app.component';
import { CartproductsComponent } from './cartproducts/cartproducts.component';

const routes: Routes = [
{path:'', component:ListproductComponent},
{path:'cartproduct', component:CartproductsComponent},
{path:'details/:id', component:DitalsComponent},








{path:'**', component:AppComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
