import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProduct } from './models';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private httpClient: HttpClient) { }

  searchProdcucts (queryTitle: string): Observable<IProduct[]> {
    return this.httpClient.get<{items: IProduct[]}>(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
    .pipe(map((item) => item.items || []))
  }
}
