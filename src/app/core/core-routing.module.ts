import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./services/auth.guard";

const MAIN_ROUTES: Routes = [
  { path: 'main/dashboard',
    component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
