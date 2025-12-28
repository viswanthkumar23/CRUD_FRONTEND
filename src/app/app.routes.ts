import { Routes } from '@angular/router';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';

export const routes: Routes = [
  { path: 'edit-customer/:email', component: CustomerFormComponent }
];
