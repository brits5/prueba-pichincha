-- Caso 3:
-- Cambiar el estado de las operaciones con más de 15 días de mora únicamente a los clientes con pasaporte a inactivo 

UPDATE o
SET o.Estado = 'Inactivo'
FROM Operaciones o
INNER JOIN Cliente c 
    ON o.codigoCliente = c.codigoCliente
WHERE c.tipoIdentificacion = 'PA'
  AND o.Mora > 15