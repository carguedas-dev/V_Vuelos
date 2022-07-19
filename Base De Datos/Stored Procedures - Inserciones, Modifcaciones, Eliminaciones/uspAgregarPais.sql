CREATE OR ALTER PROCEDURE uspAgregarPais
(
	@nombre varchar(40), 
	@imagen varbinary(MAX)
)
as
begin
	Declare @phrase varchar(20)
	Declare @valor varchar(5)
	Declare @prefijo varchar(10) 

	set @phrase = 'brandonEsElMejor'
	set @valor = (SELECT CONVERT(varchar(5), DECRYPTBYPASSPHRASE(@phrase, valor)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Paises');
	set @prefijo = (SELECT CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, prefijo)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Paises');

	INSERT INTO Pais VALUES 
	(
		CONCAT(@prefijo, '-', @valor),
		ENCRYPTBYPASSPHRASE(@phrase, @nombre),
		@imagen
	);

	UPDATE Consecutivo SET valor = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(8), (CONVERT(decimal(8,0), @valor) + 1))) WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Paises'
end