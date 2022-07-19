CREATE OR ALTER PROCEDURE uspAgregarBoleto
(
	@formaPago decimal(2,0), 
	@tipoTransaccion decimal (2,0), 
	@vuelo varchar(10), 
	@cliente varchar(40), 
	@precio decimal(12, 0)
)
as
begin
	Declare @phrase varchar(20)
	Declare @valor varchar(5)
	Declare @prefijo varchar(10) 

	set @phrase = 'brandonEsElMejor'
	set @valor = (SELECT CONVERT(varchar(5), DECRYPTBYPASSPHRASE(@phrase, valor)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Boletos');
	set @prefijo = (SELECT CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, prefijo)) FROM Consecutivo WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Boletos');

	INSERT INTO Boleto VALUES 
	(
		CONCAT(@prefijo, '-', @valor),
		@formaPago,
		@tipoTransaccion, 
		@vuelo, 
		@cliente,
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(20), @precio))
	);

	UPDATE Consecutivo SET valor = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(8), (CONVERT(decimal(8,0), @valor) + 1))) WHERE DECRYPTBYPASSPHRASE(@phrase,descripcion) = 'Boletos'
end

