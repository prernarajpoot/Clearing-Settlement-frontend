import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  buyerName: string;
  sellerName: string;
}

@Component({
  selector: 'app-addtrade',
  templateUrl: './addtrade.component.html',
  styleUrls: ['./addtrade.component.css']
})


export class AddtradeComponent {

  buyerName: string;
  sellerName: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddtradeDialog, {
      width: '250px',
      data: {sellerName: this.sellerName, buyerName: this.buyerName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.buyerName = result;
    });

}
}

@Component({
  selector: 'app-addtrade-Dialog',
  templateUrl: './addtrade-dialog.html',
})

export class AddtradeDialog {
  constructor(
    public dialogRef: MatDialogRef<AddtradeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
