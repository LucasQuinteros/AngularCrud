import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';

const routes: Routes = [

  {path:'' , redirectTo: '/items', pathMatch: 'full'},
  {path:'items', component: ItemListComponent},
  {path:'items/info/:id', component : ItemInfoComponent},
  {path:'items/pages/:page', component: ItemListComponent},
  {path:'items/search/:name', component: ItemListComponent}
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
