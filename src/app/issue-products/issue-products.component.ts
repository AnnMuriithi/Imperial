import { Component ,Inject,OnInit,Optional,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssueProductsService } from '../services/issue-products.service';


@Component({
  selector: 'app-issue-products',
  templateUrl: './issue-products.component.html',
  styleUrls: ['./issue-products.component.css']
})
export class IssueProductsComponent {
  issueproductsForm : FormGroup;

constructor(private _iproductsfb:FormBuilder, 
  private _issueproductsService: IssueProductsService, 
 private _dialogRef:  MatDialogRef<IssueProductsComponent>,
 @Optional()  @Inject(MAT_DIALOG_DATA) public data: any
  )
    {
    this.issueproductsForm = this._iproductsfb.group({
      firstname:'',
      lastname:'',
      idno:'',
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
  this.issueproductsForm.patchValue(this.data);
}
onFormSubmit() {
  if (this.issueproductsForm.valid) {
    if (this.data) {
      this._issueproductsService
        .updateIssuedProduct(this.data.id, this.issueproductsForm.value)
        .subscribe({
          next: (val: any) => {
            alert('Product Issued');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    } else {
      this._issueproductsService.addIssuedProducts(this.issueproductsForm.value).subscribe({
        next: (val: any) => {
          alert('Product Issued');
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
