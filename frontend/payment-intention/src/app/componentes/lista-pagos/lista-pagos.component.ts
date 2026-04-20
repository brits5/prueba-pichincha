import { Component, Input } from '@angular/core';
import { IntencionPago } from '../../modelos/intencion-pago';

@Component({
  selector: 'app-lista-pagos',
  standalone: false,
  templateUrl: './lista-pagos.component.html'
})
export class ListaPagosComponent {
  @Input() intenciones: IntencionPago[] = [];
}