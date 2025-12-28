import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})


export class CustomerFormComponent {

  isEditMode = false;

  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  }

  constructor(private customerService: CustomerService) { }

  loadCustomer(customerData: any) {
    this.customer = { ...customerData };
    this.isEditMode = true;
  }


  saveCustomer() {
    if (this.isEditMode) {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        alert('Customer Updated Successfully');
        this.resetForm();
      });
    } else {
      this.customerService.createCustomer(this.customer).subscribe(() => {
        alert('Customer Added Successfully');
        this.resetForm();
      });
    }
  }

  resetForm() {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    };
    this.isEditMode = false;
  }
}
