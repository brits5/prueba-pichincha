# Prueba Práctica - Banco Pichincha

Sistema de registro de intenciones de pago para campaña de convenios de cobranza.

## Tecnologías

- **Frontend:** Angular 16+
- **Backend:** .NET 8 Web API
- **Estilos:** Bootstrap 5

## 🚀 Cómo ejecutar

### Backend
```bash
cd backend/IntencionPagoApi
dotnet run
```
API disponible en: `http://localhost:5008/swagger`

### Frontend
```bash
cd frontend/payment-intention
npm install
ng serve
```
Aplicación disponible en: `http://localhost:4200`

## Funcionalidades

- Registro de intención de pago del cliente
- Listado de intenciones registradas
- Datos simulados en memoria (sin persistencia a base de datos)

## Scripts SQL

- **Query 1:** Actualiza tipos de identificación incorrectos desde tabla de referencia
- **Query 2:** Obtiene la operación de mayor mora y total de operaciones por cliente
- **Query 3:** Cambia a Inactivo las operaciones con más de 15 días de mora de clientes con pasaporte
