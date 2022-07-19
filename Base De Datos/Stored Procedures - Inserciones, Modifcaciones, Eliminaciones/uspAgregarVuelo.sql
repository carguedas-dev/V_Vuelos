CREATE OR ALTER PROCEDURE uspAgregarVuelo 
(
	@fecha_partida date, 
	@hora_partida time, 
	@fecha_llegada date,
	@hora_llegada time,
	@aerolinea varchar(10), 
	@puerta varchar(10),
	@estado decimal(2,0),
	@parteDe varchar(10),
	@llegaA varchar(10)
)
as
begin
	Declare @phrase varchar(20)
	Declare @valor varchar(5)
	Declare @prefijo varchar(10) 

	set @phrase = 'brandonEsElMejor'
	set @valor = (SELECT CONVERT(varchar(5), DECRYPTBYPASSPHRASE(@phrase, valor)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Vuelos');
	set @prefijo = (SELECT CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, prefijo)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Vuelos');

	INSERT INTO Vuelo VALUES 
	(
		
		CONCAT(@prefijo, '-', @valor),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(40), @fecha_partida)), 
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @hora_partida)),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(40), @fecha_llegada)), 
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @hora_llegada)),
		@aerolinea, 
		@puerta,
		@estado,
		@parteDe,
		@llegaA
	);
	UPDATE Consecutivo SET valor = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(8), (CONVERT(decimal(8,0), @valor) + 1))) WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Vuelos'
end
