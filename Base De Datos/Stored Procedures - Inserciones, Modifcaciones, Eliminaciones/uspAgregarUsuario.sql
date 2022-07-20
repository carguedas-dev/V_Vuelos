CREATE OR ALTER PROCEDURE uspAgregarUsuario
(
	@nombreUsuario varchar(20),
	@contrasena varchar(30), 
	@correo varchar(40), 
	@rol decimal(2,0), 
	@preguntaSeguridad decimal(2,0),
	@respuestaSeguridad varchar(100)

)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	INSERT INTO Usuario VALUES 
	(
		@nombreUsuario,
		ENCRYPTBYPASSPHRASE(@phrase, @contrasena),
		ENCRYPTBYPASSPHRASE(@phrase, @correo), 
		@rol, 
		@preguntaSeguridad,
		ENCRYPTBYPASSPHRASE(@phrase, @respuestaSeguridad)
	);
end

