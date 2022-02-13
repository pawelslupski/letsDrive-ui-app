import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ShopComponent} from "./components/shop/shop.component";
import {AuthGuard} from "./guards/auth.guard";

const MAIN_ROUTES: Routes = [
  { path: 'main/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: 'main/shop',
    component: ShopComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
