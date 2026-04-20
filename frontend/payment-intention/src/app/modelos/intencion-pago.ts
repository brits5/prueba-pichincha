export interface IntencionPago {
  id?: number;
  codigoCliente: string;
  nombreCompleto: string;
  tipoIdentificacion: 'CI' | 'PA';
  identificacion: string;
  telefono: string;
  correo: string;
  montoDisponible: number;
  fechaRegistro?: string;
  estado?: string;
}