import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producto} from "../../resources/types/Product.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Producto;
  @Output() onAddToCart = new EventEmitter<Producto>();
  public warningPic = 'https://mpng.subpng.com/20180811/zjq/kisspng-warning-sign-clip-art-safety-scalable-vector-graph-blank-caution-sign-clipart-5b6f8fd67ae9e7.8682694815340379745035.jpg';
  constructor() { }

  ngOnInit(): void {
  }

  addToCart($event: MouseEvent) {
    event?.preventDefault();
    this.onAddToCart.emit(this.product);
  }
}
