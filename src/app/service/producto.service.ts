import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/api/producto/';

  getProducto(): Observable<any> {
    return this.http.get<any[]>(this.Url).pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error.message || "Error servidor");
  }}
