namespace IntencionPagoApi.Modelos
{
    public class IntencionPago
    {
        public int Id { get; set; }
        public string CodigoCliente { get; set; } = string.Empty;
        public string NombreCompleto { get; set; } = string.Empty;
        public string TipoIdentificacion { get; set; } = string.Empty;
        public string Identificacion { get; set; } = string.Empty;
        public string Telefono { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public decimal MontoDisponible { get; set; }
        public string FechaRegistro { get; set; } = string.Empty;
        public string Estado { get; set; } = "Pendiente";
    }
}