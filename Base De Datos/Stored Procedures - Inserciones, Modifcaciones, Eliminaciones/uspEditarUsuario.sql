CREATE OR ALTER PROCEDURE uspEditarUsuario 
(
	@nombreUsuario varchar(20),
	@correo varchar(40), 
	@rol decimal(2,0) 
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	UPDATE Usuario SET
		correo = ENCRYPTBYPASSPHRASE(@phrase, @correo),
		rol = @rol
	WHERE usuario = @nombreUsuario
end

