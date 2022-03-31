import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from "../resources/types/Product.type";
import {API_BASE_URL} from "../resources/constants";

@Injectable({
  providedIn: 'root'
})
export class SirioService {

  constructor(private http: HttpClient) { }
  public loadProducts() {
    return this.http
      .get<Producto[]>(`${API_BASE_URL}Producto`)
  }
}
