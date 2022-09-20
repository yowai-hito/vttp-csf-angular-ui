import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { NumberUiComponent } from './components/number-ui/number-ui.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FirstComponent } from './components/forms/first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuyItemComponent } from './components/forms/buy-item/buy-item.component';
import { CartComponent } from './components/interfaces/cart/cart.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CartService } from './services/CartService';
import { OrderManageComponent } from './pages/order-manage/order-manage.component';
import { OrderAddComponent } from './components/forms/order-add/order-add.component';
import { OrderIdNameComponent } from './components/interfaces/order-id-name/order-id-name.component';
import { GiphySearchComponent } from './pages/giphy-search/giphy-search.component';
import { GiphyService } from './services/giphy.service';
import { GiphySearchFormComponent } from './components/forms/giphy-search-form/giphy-search-form.component';
import { GiphySearchResultComponent } from './components/interfaces/giphy-search-result/giphy-search-result.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { RegisterService } from './services/register.service';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { GoodreadsComponent } from './pages/goodreads/goodreads.component';
import { BookListComponent } from './components/goodreads/book-list/book-list.component';
import { BookDetailsComponent } from './components/goodreads/book-details/book-details.component';
import { GoodreadsRoutingModule } from './pages/goodreads/goodreads-routing.module';
import { GoodreadsService } from './services/goodreads.service';
import { GoodreadsLandingComponent } from './pages/goodreads-landing/goodreads-landing.component';
import { WebcamComponent } from './components/webcam/webcam.component';
import {WebcamModule} from 'ngx-webcam';
import { WebcamService } from './services/webcam.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NumberUiComponent,
    LandingComponent,
    FirstComponent,
    BuyItemComponent,
    CartComponent,
    ShoppingCartComponent,
    OrderManageComponent,
    OrderAddComponent,
    OrderIdNameComponent,
    GiphySearchComponent,
    GiphySearchFormComponent,
    GiphySearchResultComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    GoodreadsComponent,
    BookListComponent,
    BookDetailsComponent,
    GoodreadsLandingComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    WebcamModule
  ],
  providers: [
    CartService,
    GiphyService,
    RegisterService,
    GoodreadsService,
    WebcamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
