CREATE OR ALTER PROCEDURE uspBorrarTarjeta
(
	@numeroDeTarjeta decimal(19,0)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	DELETE FROM Tarjeta WHERE CONVERT(decimal(19,0), DECRYPTBYPASSPHRASE(@phrase, numero_tarjeta)) = @numeroDeTarjeta
end

