INSERT INTO TipoTarjeta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Visa')); 
INSERT INTO TipoTarjeta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Mastercard'));
INSERT INTO TipoTarjeta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'American Express'));
INSERT INTO TipoTarjeta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Discover'));

INSERT INTO Operacion VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Agregar'));
INSERT INTO Operacion VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Modificar'));
INSERT INTO Operacion VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Eliminar'));

INSERT INTO Rol VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Administrador'));
INSERT INTO Rol VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Seguridad'));
INSERT INTO Rol VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Consecutivo'));
INSERT INTO Rol VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Mantenimiento'));
INSERT INTO Rol VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Consulta'));

INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿En que ciudad naciste?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál es el nombre de soltera de tu madre?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál fue tu primer concierto?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál es el nombre de tu primera mascota?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál fue tu primer viaje internacional?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál es nombre de tu escuela primaria?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál fue tu primer trabajo?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál es tu fecha de cumpleaños?'));
INSERT INTO Pregunta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', '¿Cuál es el segundo nombre de tu padre?'));

INSERT INTO TipoTransaccion VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Reserva'));
INSERT INTO TipoTransaccion VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Compra'));

INSERT INTO EstadoPuerta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Abierta'));
INSERT INTO EstadoPuerta VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Cerrada'));

INSERT INTO EstadoVuelo VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Arribó'));
INSERT INTO EstadoVuelo VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Demorado'));
INSERT INTO EstadoVuelo VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Confirmado'));
INSERT INTO EstadoVuelo VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'A Tiempo'));

INSERT INTO FormaPago VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Efectivo'));
INSERT INTO FormaPago VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Tarjeta'));
INSERT INTO FormaPago VALUES (ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'Sin Pago (Reserva)'));

INSERT INTO Usuario VALUES (
	'carguedasd465',
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'ulacit123...'),
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'admin@example.com'),
	1,
	4, 
	ENCRYPTBYPASSPHRASE('brandonEsElMejor','Nombre de la primera mascota'));

INSERT INTO Usuario VALUES (
	'nbeiswengerl111',
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'ulacit123...'),
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'seguridad@example.com'),
	2,
	6, 
	ENCRYPTBYPASSPHRASE('brandonEsElMejor','Nombre de la escuela primaria'));

INSERT INTO Usuario VALUES (
	'jalfarom741',
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'ulacit123...'),
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'consecutivo@example.com'),
	3,
	1, 
	ENCRYPTBYPASSPHRASE('brandonEsElMejor','Nombre de la ciudad en la que nació'));

INSERT INTO Usuario VALUES (
	'bramirezj495',
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'ulacit123...'),
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'mantenimiento@example.com'),
	4,
	2, 
	ENCRYPTBYPASSPHRASE('brandonEsElMejor','Nombre de la soltera de su mamá'));

INSERT INTO Usuario VALUES (
	'aroldanf513',
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'ulacit123...'),
	ENCRYPTBYPASSPHRASE('brandonEsElMejor', 'consulta@example.com'),
	5,
	7, 
	ENCRYPTBYPASSPHRASE('brandonEsElMejor','Nombre del primer trabajo'));
