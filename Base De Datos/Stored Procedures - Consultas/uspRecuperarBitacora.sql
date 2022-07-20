CREATE OR ALTER PROCEDURE uspRecuperarBitacora
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		bitacora.id, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, fecha)) as fecha, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, hora)) as hora, 
		CONVERT(varchar(5000), DECRYPTBYPASSPHRASE(@phrase, registro_detalle)) as registro_detalle, 
		usuario, 
		operacion as codigo_operacion,
		CONVERT(varchar(20), DECRYPTBYPASSPHRASE(@phrase, Operacion.descripcion)) as nombre_operacion,
		CONVERT(varchar(5000), DECRYPTBYPASSPHRASE(@phrase, Bitacora.descripcion)) as descripcion
	FROM Bitacora
	INNER JOIN Operacion ON Bitacora.operacion = Operacion.id
end
