import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from './register/RegisterModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }
  
  // registerFormm :RegisterModel=new RegisterModel();

 register(registerModel:RegisterModel): Observable<any>{
   console.log("firstName "+registerModel.firstName);
   console.log("lastName "+registerModel.lastName);
   console.log("mobileNumber "+registerModel.mobileNumber);
   console.log("json "+JSON.stringify(registerModel));
   return this.httpClient.post<String>("http://localhost:2529/v1/register",registerModel);
    
 }
}
