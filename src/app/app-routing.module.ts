import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateTimeComponent } from './date-time/date-time.component';


const routes: Routes = [
  {path:'', redirectTo:'/date-time', pathMatch:'full'},
  {path:'date-time', component:DateTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
