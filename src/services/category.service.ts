import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/interface/category';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = environment.apiKey + environment.apiControllers.category;
  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.url);
  }
  getCatById(id: any): Observable<Category> {
    return this.httpClient.get<Category>(this.url + id)
  }

  updateCategory(category: Category): Observable<any> {
    return this.httpClient.put(this.url, category);
  }
}