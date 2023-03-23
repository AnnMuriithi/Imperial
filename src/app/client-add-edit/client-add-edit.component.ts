import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientsService } from '../services/clients.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-add-edit',
  templateUrl: './client-add-edit.component.html',
  styleUrls: ['./client-add-edit.component.css']
})
export class ClientAddEditComponent implements OnInit{

  clientForm : FormGroup;

  constructor(private _fb:FormBuilder, 
    private _clientsService: ClientsService, 
    private _dialogRef:  MatDialogRef<ClientAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
    this.clientForm = this._fb.group({
      firstname:'',
      lastname:'',
      idno:'',
      dob:'',
      gender:'',
      phonenumber:'',
      email:'',
      fname:'',
      lname:'',
      phone:'',
      relation:'',
      fname1:'',
      lname1:'',
      phone1:'',
      relation1:'',
  
    })
  }
  ngOnInit(): void {
    this.clientForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.clientForm.valid) {
      if (this.data) {
        this._clientsService
          .updateClient(this.data.id, this.clientForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Client Details Updated');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._clientsService.addClient(this.clientForm.value).subscribe({
          next: (val: any) => {
            alert('Client Added Updated');
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
