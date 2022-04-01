import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Producto} from "../resources/types/Product.type";
import {API_BASE_URL} from "../resources/constants";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SirioService {
  private productoBS = new BehaviorSubject<Partial<Producto[]>>([]);
  public productCart$ = this.productoBS.asObservable();
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Connection': 'keep-alive',
      'Sec-Fetch-Mode':	'cors'
    });
  }
  public loadProducts() {
    this.http
    return this.http
      .get<Producto[]>(`${API_BASE_URL}Producto`, {headers: this.headers});
  }

  public addProductToCart(producto: Producto) {
    this.productoBS.next(this.productoBS.getValue().concat(producto));
  }
}
