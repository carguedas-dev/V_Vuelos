CREATE OR ALTER PROCEDURE uspEditarVuelo 
(
	@id varchar(10),
	@fecha_partida date, 
	@hora_partida time, 
	@fecha_llegada date,
	@hora_llegada time,
	@aerolinea varchar(10), 
	@pais varchar(10),
	@puerta varchar(10),
	@estado decimal(2,0),
	@parteDe varchar(10), 
	@llegaA varchar(10)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	UPDATE Vuelo SET
		fecha_partida = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(40), @fecha_partida)), 
		hora_partida = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @hora_partida)), 
		fecha_llegada = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(40), @fecha_llegada)),
		hora_llegada = ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @hora_llegada)),
		aerolinea = @aerolinea, 
		puerta = @puerta,
		estado = @estado,
		parte_de = @parteDe,
		llega_a = @llegaA
	WHERE id = @id
end

