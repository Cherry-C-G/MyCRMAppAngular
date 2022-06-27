import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from 'src/interface/vendor';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string = environment.apiKey + environment.apiControllers.vendor;
  constructor(private httpClient: HttpClient) { }

  getAllVendor(): Observable<Vendor[]> {
    return this.httpClient.get<Vendor[]>(this.url);
  }
  getProById(id: any): Observable<Vendor> {
    return this.httpClient.get<Vendor>(this.url + id)
  }

  updateProduct(vendor: Vendor): Observable<any> {
    return this.httpClient.put(this.url, vendor);
  }
}