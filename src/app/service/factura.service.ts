import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../modelo/Factura';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/api/factura/';

  createFactura(factura: Factura) {
    return this.http.post<Factura>(this.Url, factura).pipe(catchError(this.handleError));;
  }

  handleError(error) {
    return throwError(error.message || "Error servidor");
  }


}
