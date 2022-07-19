CREATE OR ALTER PROCEDURE uspAgregarConsecutivo 
(
	@valor decimal(8,0),
	@descripcion varchar(50),
	@prefijo varchar(20), 
	@rangoInicial decimal(5,0), 
	@rangoFinal decimal(5,0)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	INSERT INTO Consecutivo VALUES 
	(
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(10), @valor)),
		ENCRYPTBYPASSPHRASE(@phrase, @descripcion),
		ENCRYPTBYPASSPHRASE(@phrase, @prefijo),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(10), @rangoInicial)),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(10), @rangoFinal))
	);
end

