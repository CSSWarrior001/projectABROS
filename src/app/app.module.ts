import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InstagramGalleryComponent } from './instagram-gallery/instagram-gallery.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterAccordionComponent } from './filter-accordion/filter-accordion.component';
import { ProductDetailGalleryComponent } from './product-detail-gallery/product-detail-gallery.component';
import { BullSportsClubComponent } from './bull-sports-club/bull-sports-club.component';
import { AuthComponent } from './auth/auth.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OtpSubmissionComponent } from './otp-submission/otp-submission.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    InstagramGalleryComponent,
    HomeBannerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    ProductBannerComponent,
    ProductListComponent,
    FilterAccordionComponent,
    ProductDetailGalleryComponent,
    BullSportsClubComponent,
    AuthComponent,
    CheckoutComponent,
    AddressDetailComponent,
    PaymentMethodComponent,
    OrderReviewComponent,
    OrderDetailComponent,
    OtpSubmissionComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxUsefulSwiperModule,
    NgwWowModule,
    Ng5SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
