CREATE OR ALTER PROCEDURE uspBorrarBoleto
(
	@idBoleto varchar(10)
)
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	DELETE FROM Boleto WHERE DECRYPTBYPASSPHRASE(@phrase, id) = @idBoleto
end

