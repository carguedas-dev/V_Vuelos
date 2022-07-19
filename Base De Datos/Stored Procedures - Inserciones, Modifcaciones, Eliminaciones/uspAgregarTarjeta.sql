CREATE OR ALTER PROCEDURE uspAgregarTarjeta
(
	@numeroDeTarjeta decimal(19,0), 
	@fechaExpiracion date, 
	@tipoTarjeta decimal(2,0),
	@cliente varchar(10),
	@cvv decimal (5,0)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	INSERT INTO Tarjeta VALUES 
	(
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(50), @numeroDeTarjeta)),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @fechaExpiracion)),
		@tipoTarjeta, 
		@cliente,
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(10), @cvv))
	);
end

