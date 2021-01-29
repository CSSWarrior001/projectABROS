import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthComponent } from './auth/auth.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Product', component: ProductComponent},
  { path: 'ProductDetail', component: ProductDetailComponent},
  { path: 'Auth', component: AuthComponent},
  { path: 'Checkout', component: CheckoutComponent},
  { path: 'FAQs', component: FaqComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
