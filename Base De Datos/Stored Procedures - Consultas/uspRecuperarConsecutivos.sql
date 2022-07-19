CREATE OR ALTER PROCEDURE uspRecuperarConsecutivos
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		id,
		CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, valor)) as valor,
		CONVERT(varchar(500), DECRYPTBYPASSPHRASE(@phrase, descripcion)) as descripcion,
		CONVERT(varchar(15), DECRYPTBYPASSPHRASE(@phrase, prefijo)) as prefijo,
		CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, rango_inicial)) as rango_inicial,
		CONVERT(varchar(10), DECRYPTBYPASSPHRASE(@phrase, rango_final)) as rango_final
	FROM Consecutivo
end

