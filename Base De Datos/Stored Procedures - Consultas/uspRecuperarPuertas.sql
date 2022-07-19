aCREATE OR ALTER PROCEDURE uspRecuperarPuertas
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		Puerta.id, 
		CONVERT(varchar(20), DECRYPTBYPASSPHRASE(@phrase, numero))  as numero,
		Puerta.estado as NumeroEstado,
		CONVERT(varchar(30), DECRYPTBYPASSPHRASE(@phrase, EstadoPuerta.descripcion)) as DescripcionEstado 
	FROM Puerta
	INNER JOIN EstadoPuerta ON Puerta.estado = EstadoPuerta.id
end

SELECT * FROM PUERTA
