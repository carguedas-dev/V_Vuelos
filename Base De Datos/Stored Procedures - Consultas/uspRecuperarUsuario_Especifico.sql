CREATE PROCEDURE uspRecuperarUsuario_Especifico
(
	@idUsuario varchar(30)
)
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		usuario, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, correo))  as correo,
		rol as NumeroRol, 
		CONVERT(varchar(30), DECRYPTBYPASSPHRASE(@phrase, Rol.descripcion)) as NombreRol 
	FROM Usuario
	INNER JOIN ROL ON Rol.id = Usuario.rol
	WHERE usuario = @idUsuario
end

SELECT * FROM Usuario

