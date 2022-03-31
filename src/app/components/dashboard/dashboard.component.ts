import { Component, OnInit } from '@angular/core';
import {SirioService} from "../../services/sirio.service";
import {Observable} from "rxjs";
import {Producto} from "../../resources/types/Product.type";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public products$!: Observable<Producto[]>;
  constructor(private sirioService: SirioService) { }

  ngOnInit(): void {
    this.products$ = this.sirioService.loadProducts();
  }

}
