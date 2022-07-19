CREATE OR ALTER PROCEDURE uspModificarConsecutivo 
(
	@id decimal(2,0),
	@descripcion varchar(50),
	@prefijo varchar(20), 
	@rangoFinal decimal(5,0)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	BEGIN TRY
	IF @rangoFinal < (SELECT CONVERT(decimal(5,0), DECRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(7), rango_inicial))) FROM Consecutivo WHERE CONVERT(decimal(2,0), DECRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(7), id))) = @id)
		THROW 51000, 'El rango final no puede ser menor al inicial', 1;
	
	UPDATE Consecutivo SET 
		descripcion = ENCRYPTBYPASSPHRASE(@phrase, @descripcion),
		prefijo = ENCRYPTBYPASSPHRASE(@phrase, @prefijo),
		rango_final = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(10), @rangoFinal))
	WHERE id = @id
	END TRY
	BEGIN CATCH
	END CATCH
end

