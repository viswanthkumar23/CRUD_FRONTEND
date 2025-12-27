import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})

export class CustomerFormComponent {

  customer: Customer = {
    firstName: '',
    lastName: '',
    emailId: '',
    phoneNumber: ''
  }

  constructor(private customerService: CustomerService) { }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log('Customer created successfully', data);
    });

  }
}
