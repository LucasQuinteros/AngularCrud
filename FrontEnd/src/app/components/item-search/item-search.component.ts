import { Component, OnInit,Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  productName : string = '';
  @Output() Buscar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void { 
    if(this.productName !== null){
      this.Buscar.emit(this.productName);
      this.productName = '';
    }
 }
}
