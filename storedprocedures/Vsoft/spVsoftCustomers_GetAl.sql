CREATE PROCEDURE [spVsoftCustomers_GetAll]
AS
BEGIN
    SET NOCOUNT ON
    SELECT *
    FROM VsoftCustomers;
END
