CREATE PROCEDURE [spVsoftKboCodes_InsertFull]
    @Category nvarchar(30),
    @Code nvarchar(15),
    @Language nvarchar(2),
    @Description nvarchar(200)
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO VsoftKboCodes
        (Category, Code, Language, Description)
    VALUES
        ( @Category, @Code, @Language, @Description )
END
