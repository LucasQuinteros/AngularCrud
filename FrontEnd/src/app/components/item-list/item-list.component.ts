import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/Item';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnChanges {

  items : Item[] = [];
  

  constructor( 
    private route : ActivatedRoute,
    private itemService : ItemsService
    ) { 

  }

  ngOnInit(): void {


    this.getItems();

  }
  ngOnChanges(changes : SimpleChanges) : void {
    console.log('simple');
    
  }

  getItems(): void {
    const page = Number( this.route.snapshot.paramMap.get('page')) ;
    this.itemService.getItems(page).subscribe(
      res =>{
        this.items = res;
      });
  }
  getItemsByPage(page : Number): void{
    this.itemService.getItems(Number(page)).subscribe(
      res =>{
        this.items = res;
      });
  }
  getItemsByCoincidence( name : string): void{
    this.itemService.getNamesByCoincidence(name).subscribe(
      res => {
        this.items = res;
        console.log(res);
        
      }
    );
  }


}
