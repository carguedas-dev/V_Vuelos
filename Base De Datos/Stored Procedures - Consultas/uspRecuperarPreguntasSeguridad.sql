CREATE OR ALTER PROCEDURE uspRecuperarPreguntasSeguridad
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		id,
		CONVERT(varchar(30), DECRYPTBYPASSPHRASE(@phrase, descripcion)) as descripcion
	FROM Pregunta
end