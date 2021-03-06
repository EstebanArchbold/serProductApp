import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producto} from "../../resources/types/Product.type";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products!: Producto[] | null;
  @Output() onAddToCart = new EventEmitter<Producto>();
  constructor() { }

  ngOnInit(): void {
  }

}
