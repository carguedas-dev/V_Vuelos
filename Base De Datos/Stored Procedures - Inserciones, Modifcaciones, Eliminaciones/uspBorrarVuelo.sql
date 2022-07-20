CREATE OR ALTER PROCEDURE uspBorrarVuelo 
(
	@id varchar(10)
)
as
begin
	DELETE FROM Vuelo WHERE id = @id
end

