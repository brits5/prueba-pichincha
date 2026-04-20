import { Component, OnInit } from '@angular/core';
import { IntencionPago } from './modelos/intencion-pago';
import { IntencionPagoService } from './servicios/intencion-pago.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  intenciones: IntencionPago[] = [];

  constructor(private servicio: IntencionPagoService) {}

  ngOnInit(): void {
    this.servicio.obtenerTodos().subscribe(datos => this.intenciones = datos);
  }

  alGuardar(nueva: IntencionPago): void {
    this.intenciones = [...this.intenciones, nueva];
  }
}