CREATE OR ALTER PROCEDURE uspAgregarPuerta
(
	@nombre varchar(40), 
	@estado decimal(2,0)
)
as
begin
	Declare @phrase varchar(20)
	Declare @valor varchar(5)
	Declare @prefijo varchar(10) 

	set @phrase = 'brandonEsElMejor'
	set @valor = (SELECT CONVERT(varchar(5), DECRYPTBYPASSPHRASE(@phrase, valor)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Puertas');
	set @prefijo = (SELECT CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, prefijo)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Puertas');

	INSERT INTO Puerta VALUES 
	(
		CONCAT(@prefijo, '-', @valor),
		ENCRYPTBYPASSPHRASE(@phrase, @nombre),
		@estado
	);

	UPDATE Consecutivo SET valor = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(8), (CONVERT(decimal(8,0), @valor) + 1))) WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Puertas'
end
