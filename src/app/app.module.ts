import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
//import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ModuleComponent } from "./module/module.component";
import { CartComponent } from "./cart/cart.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
