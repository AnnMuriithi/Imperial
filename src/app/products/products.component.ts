import { Component ,Inject,OnInit,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productsForm : FormGroup;

  constructor(private _productsfb:FormBuilder, 
    private _productsService: ProductsService, 
    private _dialogRef:  MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
    this.productsForm = this._productsfb.group({
      category:'',
      pname:'',
      start:'',
      end:'',
      amount:'',
      duration:'',
      status:''
      
    })
}
ngOnInit(): void {
  this.productsForm.patchValue(this.data);;
}
onFormSubmit() {
  if (this.productsForm.valid) {
    if (this.data) {
      this._productsService
        .updateProduct(this.data.id, this.productsForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Product Updated');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      this._productsService.addProduct(this.productsForm.value).subscribe({
        next: (val: any) => {
          alert('Product Updated');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
      
    }
 

}