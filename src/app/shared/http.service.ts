import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  productUrl: string = "http://www.mocky.io/v2/5d7b49243500008d5c3caa59";
  private messageSource = new BehaviorSubject<string>("default message");
  selectedItems: BehaviorSubject<Array<any>> = new BehaviorSubject([])

  currentMessage = this.messageSource.asObservable();

  constructor(private _http: HttpClient, private snackBar:MatSnackBar ) { }

  getProductList() {
    return this._http.get(this.productUrl);
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  addItemTocart(item: any) {
    let currentItems = this.selectedItems.value;
    
    if (currentItems.filter(e => e.id === item.id).length > 0) {
      /* vendors contains the element we're looking for */
    }else{
      currentItems.push(item);

      this.snackBar.open("Product Added to cart Successfully" ,'',{'duration': 2000});
    }
    this.selectedItems.next(currentItems);
  }

  removeItemFromCart(position: any) {
    let currentItems = this.selectedItems.value;

    currentItems = currentItems.filter(object => {
      return object['id'] != position;
    });
    this.snackBar.open("Product Removed from cart Successfully" ,'',{'duration': 2000});
    
    this.selectedItems.next(currentItems);
 
  }
}
