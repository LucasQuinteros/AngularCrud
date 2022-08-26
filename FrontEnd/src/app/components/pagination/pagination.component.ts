import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  index : number[] = [1,2,3];
  disabled : string = 'disabled';
  @Output() pageChange  = new EventEmitter<Number>();
  
  constructor(private itemService : ItemsService) { }

  ngOnInit(): void {
  }

  onClick(pageNumber : Number): void{
    this.pageChange.emit(pageNumber)
  }
  nextClick(){
    const page = this.index[ this.index.length - 1 ] + 1;
    const aux = this.index.map( element => element+3);
    this.index = aux;
    this.onClick(page);
    this.disabled = ''
   
  }
  prevClick(){
    if( this.index[2] > 3){
      const page = this.index[ 0 ] - 1;
      const aux = this.index.map( element => element - 3);
      this.index = aux;
      this.onClick(page);
      if( this.index[2] <= 3) this.disabled = 'disabled';
    }
    
  }


}
