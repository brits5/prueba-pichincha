import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntencionPago } from '../modelos/intencion-pago';

@Injectable({ providedIn: 'root' })
export class IntencionPagoService {

  private apiUrl = 'http://localhost:5008/api/IntencionPago';

  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<IntencionPago[]> {
    return this.http.get<IntencionPago[]>(this.apiUrl);
  }

  registrar(intencion: IntencionPago): Observable<IntencionPago> {
    return this.http.post<IntencionPago>(this.apiUrl, intencion);
  }
}