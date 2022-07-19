CREATE OR ALTER PROCEDURE uspRecuperarPaises
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		id,
		CONVERT(varchar(30), DECRYPTBYPASSPHRASE(@phrase, nombre)) as nombre,
		imagen
	FROM Pais
end

