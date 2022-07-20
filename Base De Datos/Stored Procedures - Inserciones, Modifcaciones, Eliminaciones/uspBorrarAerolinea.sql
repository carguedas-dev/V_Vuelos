CREATE OR ALTER PROCEDURE uspBorrarAerolinea
(
	@id varchar(10)
)
as
begin
	DELETE FROM Aerolinea WHERE id = @id
end

