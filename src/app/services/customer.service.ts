import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  createCustomer(customer: Customer) {
    return this.http.post(`http://localhost:5858/api/customer/create`, customer);
  }

  getCustomers() {
    return this.http.get<any[]>(`http://localhost:5858/api/customer`);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(`http://localhost:5858/api/customer/update`, customer);
  }

  deleteCustomer(id: number) {
    return this.http.delete(`http://localhost:5858/api/customer/delete/${id}`);
  }

}
