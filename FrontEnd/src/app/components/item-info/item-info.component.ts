import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { ItemsService} from '../../services/items.service'

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
 

  @Input() item : Item  = { ProductID : 0 , ProductName : 'undefined' };

  constructor(
    private route : ActivatedRoute,
    private itemsService : ItemsService
    ) { }

  ngOnInit(): void {
    
    this.getItem();
    
  }
  getItem(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.itemsService.getItem(id)
          .subscribe( (res) => {
            this.item = res[0];
            console.log(this.item);
        });
          
  }

}
