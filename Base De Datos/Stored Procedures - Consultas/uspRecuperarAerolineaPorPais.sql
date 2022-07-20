CREATE OR ALTER PROCEDURE uspRecuperarAerolineaPorPais
(
	@idPais varchar(15)
)
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		Aerolinea.id,
		CONVERT(varchar(30), DECRYPTBYPASSPHRASE(@phrase, Aerolinea.nombre)) as nombre,
		Aerolinea.imagen, 
		Pais.id as CodigoPais,
		CONVERT(varchar(50), DECRYPTBYPASSPHRASE(@phrase, Pais.nombre)) as NombrePais
	FROM Aerolinea
	INNER JOIN Pais ON Aerolinea.pais = Pais.id
	WHERE Aerolinea.pais = @idPais
end

SELECT * FROM Aerolinea

