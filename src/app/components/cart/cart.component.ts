import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../../resources/types/Product.type";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() product!: Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
