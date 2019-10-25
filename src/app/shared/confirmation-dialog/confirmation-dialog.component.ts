import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent  {
  data:any
  constructor(public __httpService:HttpService,  public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(id:any){
    this.__httpService.removeItemFromCart(id);
  }

}
