import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postComplaint(data : any){
    return this.http.post<any>("http://localhost:3000/productList", data);
  }
  getComplaint(){
    return this.http.get<any>("http://localhost:3000/productList");
  }
  putComplaint(data:any, id: any){
    return this.http.put<any>("http://localhost:3000/productList/"+id, data);
  }
  deleteComplaint(id: any){
    return this.http.delete<any>("http://localhost:3000/productList/"+id);
  }
}
