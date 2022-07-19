CREATE OR ALTER PROCEDURE uspAgregarError 
(
	@fecha date,
	@hora time, 
	@numeroDeError varchar(300),
	@mensajeDeError varchar(5000)
)
as
begin
	Declare @phrase varchar(20)
	set @phrase = 'brandonEsElMejor'

	INSERT INTO Error VALUES 
	(
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(40), @fecha)),
		ENCRYPTBYPASSPHRASE(@phrase, CONVERT(varchar(25), @hora)),
		ENCRYPTBYPASSPHRASE(@phrase, @numeroDeError),
		ENCRYPTBYPASSPHRASE(@phrase, @mensajeDeError)
	);
end

