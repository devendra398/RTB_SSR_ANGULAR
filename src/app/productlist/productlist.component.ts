import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  allProducts:any = [];
  message:string;
  selectedProducts:any =[];

  constructor(private httpService: HttpService , private titleService: Title, private meta : Meta) { 
  this.titleService.setTitle('Product List');
  this.meta.addTag({name:'description', content:'Angular Seo Tutorial'});
  this.meta.addTag({name:'keyword', content:'Angular keyword'});

  }

  ngOnInit() {
    this.getProductList();

    this.httpService.currentMessage.subscribe(message=>this.message=message);
  }

  getProductList(){
    this.httpService.getProductList().subscribe(res=>{
      this.allProducts = res;
    })
  }

  addToCart(item){
    this.httpService.addItemTocart(item);
  }

}
