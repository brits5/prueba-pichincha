using Microsoft.AspNetCore.Mvc;
using IntencionPagoApi.Modelos;
using IntencionPagoApi.Servicios;

namespace IntencionPagoApi.Controladores
{
    [ApiController]
    [Route("api/IntencionPago")] 
    public class IntencionPagoControlador : ControllerBase
    {
        private readonly IntencionPagoServicio _servicio;

        public IntencionPagoControlador(IntencionPagoServicio servicio)
        {
            _servicio = servicio;
        }

        // GET api/IntencionPago
        [HttpGet]
        public ActionResult<List<IntencionPago>> ObtenerTodos()
        {
            return Ok(_servicio.ObtenerTodos());
        }

        // POST api/IntencionPago
        [HttpPost]
        public ActionResult<IntencionPago> Registrar([FromBody] IntencionPago intencion)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var resultado = _servicio.Registrar(intencion);
            return CreatedAtAction(nameof(ObtenerTodos), resultado);
        }
    }
}