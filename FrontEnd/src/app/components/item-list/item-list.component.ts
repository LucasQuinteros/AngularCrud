import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/Item';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items : Item[] = []

  constructor( private itemService : ItemsService) { 
    
  }

  ngOnInit(): void {
    this.getItems();    
  }

  getItems(): void {
    this.itemService.getItems().subscribe(
      res =>{
        this.items = res;
        console.log(this.items);
      
      });
  }

}
