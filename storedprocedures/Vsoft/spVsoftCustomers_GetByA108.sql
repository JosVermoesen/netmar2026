CREATE PROCEDURE [spVsoftCustomers_GetByA108]
    @A108 nvarchar(24)
AS
BEGIN
    SET NOCOUNT ON

    SELECT *
    FROM VsoftCustomers
    WHERE A108 = @A108
END
