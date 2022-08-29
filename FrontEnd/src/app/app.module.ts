import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemsService } from './services/items.service';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { ItemSearchComponent } from './components/item-search/item-search.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemFormComponent,
    ItemListComponent,
    ItemInfoComponent,
    ItemSearchComponent,
    FooterComponent,
    PaginationComponent,
    ItemMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
