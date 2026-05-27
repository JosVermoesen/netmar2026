CREATE PROCEDURE [spVsoftCustomers_GetByA110]
    @Id nvarchar(12)
AS
BEGIN
    SET NOCOUNT ON

    SELECT *
    FROM VsoftCustomers
    WHERE Id = @Id
END
