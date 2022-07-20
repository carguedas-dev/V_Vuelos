CREATE OR ALTER PROCEDURE uspEditarAerolinea 
(
	@id varchar(10), 
	@nombre varchar(40), 
	@imagen varbinary(MAX)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	UPDATE Aerolinea SET
		nombre = ENCRYPTBYPASSPHRASE(@phrase, @nombre),
		imagen = @imagen
	WHERE id = @id
end

