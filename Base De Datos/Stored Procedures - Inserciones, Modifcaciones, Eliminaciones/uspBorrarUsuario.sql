CREATE OR ALTER PROCEDURE uspBorrarUsuario
(
	@nombreUsuario varchar(20)
)
as
begin
	DELETE FROM Usuario WHERE usuario = @nombreUsuario
end

