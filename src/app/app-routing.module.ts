import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/forms/first/first.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NumberUiComponent } from './components/number-ui/number-ui.component';
import { OrderManageComponent } from './pages/order-manage/order-manage.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { GiphySearchComponent } from './pages/giphy-search/giphy-search.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { WebcamComponent } from './components/webcam/webcam.component';

const goodReadsAssignment: Routes = [
  { path : 'goodreads',
    title: 'Good Reads',
    loadChildren: () => import(`./pages/goodreads/goodreads.module`).then(m => m.GoodreadsModule)
  }
]

const WebcamAssignment: Routes = [
  { path: 'webcam', 
    title: 'Webcam', 
    component: WebcamComponent
  }
]

const assignmentRoutes: Routes = [
  { path : 'number-ui',
    title: 'Number 30',
    component : NumberUiComponent,
  },
  {
    path : 'firstForm',
    title : 'First Form',
    component: FirstComponent
  },
  {
    path : 'shoppingCart',
    title : "Shopping Cart",
    component: ShoppingCartComponent
  },
  {
    path : 'orderManage',
    title : 'Order Manager',
    component: OrderManageComponent
  },
  {
    path : 'giphySearch',
    title : 'Giphy Search',
    component: GiphySearchComponent
  },
  {
    path: 'registerPage',
    title: 'Registration',
    component: RegisterPageComponent
  },
  ...goodReadsAssignment,
  ...WebcamAssignment
]

const routes: Routes = [
  
  { path : '',
    title: 'Landing Page',
    component: LandingComponent,
  },
  ...assignmentRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
