import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/interface/customer';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string = environment.apiKey + environment.apiControllers.customer;
  constructor(private httpClient: HttpClient) { }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.url);
  }
  getCusById(id: any): Observable<Customer> {
    return this.httpClient.get<Customer>(this.url + id)
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put(this.url, customer);
  }
}