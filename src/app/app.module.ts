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
    GiphySearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    GiphyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
