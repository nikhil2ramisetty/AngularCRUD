import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    
  }
  onClick(){
    if(this.productForm.valid){
      this.api.postComplaint(this.productForm.value).subscribe({
        next: ((res)=>{
          alert("Complaint Added Successfully");
          window.location.reload();
        }),
        error:(()=>{
          alert("Error while adding complaint");
        })
      });
    }
  }
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Complaint : ["", Validators.required]
    })
    
  }

}
