import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../../resources/types/Product.type";
import {SirioService} from "../../services/sirio.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products$!: Observable<Partial<Producto[]>>;
  public cartProducts$!: Observable<Partial<Producto[]>>
  constructor(private sirioService: SirioService) { }

  ngOnInit(): void {
    this.products$ = this.sirioService.productCart$;
    this.cartProducts$ = this.sirioService.productCart$;
  }

}
