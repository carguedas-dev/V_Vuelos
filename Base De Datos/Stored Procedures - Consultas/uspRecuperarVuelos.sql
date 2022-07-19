CREATE OR ALTER PROCEDURE uspRecuperarVuelos
as
begin
	DECLARE @phrase varchar(25)
	SET @phrase = 'brandonEsElMejor'

	SELECT 
		Vuelo.id, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, fecha_partida)) as fecha_partida,
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, hora_partida)) as hora_partida,
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, fecha_llegada)) as fecha_llegada,
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, hora_llegada)) as hora_llegada, 
		Vuelo.aerolinea AS codigo_aerolinea, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, Aerolinea.nombre)) as nombre_aerolinea, 
		Vuelo.puerta AS codigo_puerta, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, Puerta.numero)) as numero_puerta,
		Vuelo.estado AS codigo_estado,
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, EstadoVuelo.descripcion)) as descripcion_estado,
		parte_de as codigo_pais_parte, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, Pais.nombre)) as nombre_pais_parte,
		llega_a as codigo_pais_llega, 
		CONVERT(varchar(40), DECRYPTBYPASSPHRASE(@phrase, llegaA.nombre)) as nombre_pais_llega
	FROM Vuelo
	LEFT OUTER JOIN Aerolinea ON Vuelo.aerolinea = Aerolinea.id
	LEFT OUTER JOIN Puerta ON Vuelo.Puerta = Puerta.id
	LEFT OUTER JOIN EstadoVuelo On Vuelo.estado = EstadoVuelo.id
	LEFT OUTER JOIN Pais ON Vuelo.parte_de = Pais.id
	LEFT OUTER JOIN Pais llegaA ON Vuelo.llega_a = llegaA.id
end
