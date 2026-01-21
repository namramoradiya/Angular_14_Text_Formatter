import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APIsComponent } from './apis/apis.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'API',component:APIsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
