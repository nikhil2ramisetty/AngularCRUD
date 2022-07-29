import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  dataSource = [{id: null, Name:"", Complaint:""}];
  productForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
    
  }
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Complaint : ["", Validators.required]
    })
    
    this.api.getComplaint().subscribe({
      next: (res)=>{
        console.log(res);
        this.dataSource = this.dataSource.concat(res);
      }
    })
  }
  onRead(){
    this.api.getComplaint().subscribe({
      next: (res)=>{
        console.log(res);
        window.location.reload();
      }
    })}
    editButton(obj: any){
      console.log((document.getElementById("editName"+obj.Name) as HTMLInputElement).value);
      let obje = {
        id: (document.getElementById("editName"+obj.id) as HTMLInputElement).value,
        Name: (document.getElementById("editName"+obj.Name) as HTMLInputElement).value,
        Complaint: (document.getElementById("editComplaint"+obj.Complaint) as HTMLInputElement).value
      }
      this.api.putComplaint(obje,obj.id).subscribe({
        next: (res)=>{
          console.log(res);
          window.location.reload();
        }
      })
      
    }
    deleteButton(obj:any){
      this.api.deleteComplaint(obj.id).subscribe({
        next: (res)=>{
          console.log(res);
          window.location.reload();

        }
      })
    }
    
}
