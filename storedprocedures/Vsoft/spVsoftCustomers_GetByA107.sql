CREATE PROCEDURE [spVsoftCustomers_GetByA107]
    @A107 nvarchar(7)
AS
BEGIN
    SET NOCOUNT ON

    SELECT *
    FROM VsoftCustomers
    WHERE A107 = @A107
END
