import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '' , component: ProductCatalogScreenComponent},
  { path: 'AppComponent', component: AppComponent  },
]



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  ngOnInit(){
  }
}

