import { Component, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})

export class CustomerListComponent {

  constructor(private customerService: CustomerService, private router: Router) { }
  customers: any[] = [];

  @Output() editEvent = new EventEmitter<any>();

  ngOnInit() {
    this.loadCustomers();
  }



  loadCustomers() {
    this.customerService.getCustomers().subscribe((data: any) => {
      console.log('CUSTOMERS FROM API:', data);
      this.customers = data;
    });
  }

  editCustomer(Customer: any) {
    this.editEvent.emit(Customer);

    const offcanvasEl = document.getElementById('offcanvasScrolling');
    const offcanvas = new bootstrap.Offcanvas(offcanvasEl);
    offcanvas.show();
  }

  deleteCustomer(id: number) {

    const confirmed = window.confirm(
      'Are you sure you want to delete this customer?'
    );

    if (confirmed) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        alert('Customer deleted successfully.');
        this.loadCustomers();
      })
    }

  }


}
