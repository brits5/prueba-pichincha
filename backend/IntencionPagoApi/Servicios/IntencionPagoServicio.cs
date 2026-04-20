using IntencionPagoApi.Modelos;

namespace IntencionPagoApi.Servicios
{
    public class IntencionPagoServicio
    {
        // Datos simulados en memoria (sin base de datos)
        private static List<IntencionPago> _datos = new List<IntencionPago>
        {
            new IntencionPago
            {
                Id = 1,
                CodigoCliente = "1",
                NombreCompleto = "JEAN CARLOS ROMERO ARMIJOS",
                TipoIdentificacion = "CI",
                Identificacion = "00001900868728",
                Telefono = "0991234567",
                Correo = "jean.romero@correo.com",
                MontoDisponible = 150.00m,
                FechaRegistro = "2024-01-18",
                Estado = "Pendiente"
            },
            new IntencionPago
            {
                Id = 2,
                CodigoCliente = "2",
                NombreCompleto = "CARLOS ROMERO",
                TipoIdentificacion = "PA",
                Identificacion = "00001103362722",
                Telefono = "0987654321",
                Correo = "carlos.romero@correo.com",
                MontoDisponible = 300.00m,
                FechaRegistro = "2024-01-18",
                Estado = "Pendiente"
            }
        };

        public List<IntencionPago> ObtenerTodos() => _datos;

        public IntencionPago Registrar(IntencionPago intencion)
        {
            intencion.Id = _datos.Count + 1;
            intencion.FechaRegistro = DateTime.Now.ToString("yyyy-MM-dd");
            intencion.Estado = "Pendiente";
            _datos.Add(intencion);
            return intencion;
        }
    }
}