-- Caso 1:
 -- se necesita actualizar los tipos de identificación de la Tabla 1 
 -- con los datos de tipo Identificación de la Tabla 2 ya que el tipo de identificación en la Tabla 1 tiene datos incorrectos.

UPDATE c
SET c.tipoIdentificacion = cti.tipoIdentificacion
FROM Cliente c
INNER JOIN ClienteTipoIdentificacion cti 
    ON c.codigoEmpresaCedente = cti.codigoEmpresaCedente
    AND c.identificacionCliente = cti.identificacionCliente