import { Component, OnInit } from '@angular/core';
import {HttpService} from '../shared/http.service';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {
  message:string;
  selectedProducts:any =[];
  constructor(private __http:HttpService, private __dialog:MatDialog) { }

  ngOnInit() {
      this.__http.currentMessage.subscribe(message=>{this.message=message});
      this.__http.selectedItems.subscribe(selectedItems=>this.selectedProducts=selectedItems);
  }

  // deleteItem(id: any){
  //   this.__http.removeItemFromCart(id);
  // }

  openDialog(id:any): void {
    const dialogRef = this.__dialog.open(ConfirmationDialogComponent, {
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.__http.removeItemFromCart(id);
      }
    });
  }
}
