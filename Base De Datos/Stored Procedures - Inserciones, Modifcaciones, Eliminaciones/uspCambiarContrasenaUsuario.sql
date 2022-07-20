CREATE OR ALTER PROCEDURE uspCambiarContrasenaUsuario 
(
	@nombreUsuario varchar(20),
	@nuevaContrasena varchar(30)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	UPDATE Usuario SET
		contrasena = ENCRYPTBYPASSPHRASE(@phrase, @nuevaContrasena)
	WHERE DECRYPTBYPASSPHRASE(@phrase, usuario) = @nombreUsuario
end

