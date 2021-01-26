import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from "src/app/user-form/user-form.component";
import { WelcomePageComponent } from "src/app/welcome-page/welcome-page.component";
const routes: Routes = [    
  {path : '', component : UserFormComponent},
  {path : '', redirectTo:'/user-form', pathMatch: 'full'},
  {path : 'user-form', component : UserFormComponent},
  {path : 'welcome-page/:name', component: WelcomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
