CREATE OR ALTER PROCEDURE uspBorrarPuerta
(
	@id varchar(10)
)
as
begin
	DELETE FROM Puerta WHERE id = @id
end

