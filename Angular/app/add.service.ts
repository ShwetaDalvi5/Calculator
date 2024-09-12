import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  add(num1:number, num2:number):Observable<number>{
    const para = {num1, num2};
    return this.http.post<number>('http://localhost:8080/add', para);
  }

  sub(num1:number, num2:number):Observable<number>{
    const para = {num1, num2};
    return this.http.post<number>('http://localhost:8080/sub', para);
  }

  mult(num1:number, num2:number):Observable<number>{
    const para = {num1, num2};
    return this.http.post<number>('http://localhost:8080/mult', para);
  }

  div(num1:number, num2:number):Observable<number>{
    const para = {num1, num2};
    return this.http.post<number>('http://localhost:8080/div', para);
  }

  mod(num1:number, num2:number):Observable<number>{
    const para = {num1, num2};
    return this.http.post<number>('http://localhost:8080/mod', para);
  }

}
