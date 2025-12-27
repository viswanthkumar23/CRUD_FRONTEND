import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer) {
    return this.http.post(`http://localhost:5858/api/customer/create`, customer);
  }
}
