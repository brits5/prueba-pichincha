-- Caso 2:
 -- 2.	Obtener la operación de mayor mora por cliente y devolver el numero de operaciones que tiene cada cliente  

SELECT 
    c.codigoCliente,
    c.nombreCompleto,
    MAX(o.Mora)             AS mayorMora,
    COUNT(o.Operacion)      AS totalOperaciones
FROM Cliente c
INNER JOIN Operaciones o 
    ON c.codigoCliente = o.codigoCliente
GROUP BY 
    c.codigoCliente, 
    c.nombreCompleto
ORDER BY 
    mayorMora DESC