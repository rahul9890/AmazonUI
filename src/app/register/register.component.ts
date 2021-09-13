import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { RegisterModel } from './RegisterModel';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :RegisterModel=new RegisterModel();

  constructor(private router: Router,private registerService:RegisterService,private httpClient: HttpClient) { }
  
  ngOnInit(): void {

  }
  
  registerUser():void{
       this.registerService.register(this.registerForm).subscribe();
         
       
       
      //  window.alert('Registration success'+registerForm)
  }
}
