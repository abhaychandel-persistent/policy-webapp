import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.scss']
})
export class CreatePolicyComponent {
  form: FormGroup;
  dataFromDialog: any;

  constructor(public dialogRef: MatDialogRef<CreatePolicyComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,  private fb: FormBuilder,
    private employeeService: EmployeeService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      policyName: ['', Validators.required],
      description: ['', Validators.required],
      type: [''],
    });
  }

  submit(form: NgForm) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form,
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
