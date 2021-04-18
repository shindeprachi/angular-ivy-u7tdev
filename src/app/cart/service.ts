import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class CartService {
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }
  items = [];
  constructor(private http: HttpClient) {}
}
