DELETE FROM TipoTarjeta
DELETE FROM Operacion
DELETE FROM Rol
DELETE FROM Pregunta
DELETE FROM TipoTransaccion
DELETE FROM EstadoPuerta
DELETE FROM FormaPago
DELETE FROM USUARIO 

DBCC CHECKIDENT ('TipoTarjeta', RESEED, 0);
DBCC CHECKIDENT ('Operacion', RESEED, 0);
DBCC CHECKIDENT ('Rol', RESEED, 0);
DBCC CHECKIDENT ('Pregunta', RESEED, 0);
DBCC CHECKIDENT ('TipoTransaccion', RESEED, 0);
DBCC CHECKIDENT ('EstadoPuerta', RESEED, 0);
DBCC CHECKIDENT ('FormaPago', RESEED, 0);
