CREATE OR ALTER PROCEDURE uspBorrarPais
(
	@id varchar(10)
)
as
begin
	DELETE FROM Pais WHERE id = @id
end

