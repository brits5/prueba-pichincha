import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntencionPagoService } from '../../servicios/intencion-pago.service';
import { IntencionPago } from '../../modelos/intencion-pago';

@Component({
  selector: 'app-formulario-pago',
  standalone: false,
  templateUrl: './formulario-pago.component.html'
})
export class FormularioPagoComponent implements OnInit {

  @Output() intencionGuardada = new EventEmitter<IntencionPago>();

  formulario!: FormGroup;
  cargando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor(
    private fb: FormBuilder,
    private servicio: IntencionPagoService
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      codigoCliente:      ['', Validators.required],
      nombreCompleto:     ['', [Validators.required, Validators.minLength(3)]],
      tipoIdentificacion: ['', Validators.required],
      identificacion:     ['', [Validators.required, Validators.minLength(5)]],
      telefono:           ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo:             ['', [Validators.required, Validators.email]],
      montoDisponible:    [null, [Validators.required, Validators.min(1)]]
    });
  }

  enviar(): void {
    if (this.formulario.invalid) { this.formulario.markAllAsTouched(); return; }
    this.cargando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.servicio.registrar(this.formulario.value).subscribe({
      next: (resultado) => {
        this.mensajeExito = 'Intención de pago registrada exitosamente.';
        this.intencionGuardada.emit(resultado);
        this.formulario.reset();
        this.cargando = false;
      },
      error: () => {
        this.mensajeError = 'Error al registrar. Intente nuevamente.';
        this.cargando = false;
      }
    });
  }

  esInvalido(campo: string): boolean {
    const control = this.formulario.get(campo);
    return !!(control && control.invalid && control.touched);
  }
}