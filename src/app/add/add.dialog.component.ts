import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Product} from "../model/product";

@Component({
  selector: 'add-dialog',
  templateUrl: 'add.dialog.component.html',
})
export class AddDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
