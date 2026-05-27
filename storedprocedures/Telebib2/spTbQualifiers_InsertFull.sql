CREATE PROCEDURE [spTb2Qualifiers_InsertFull]
    @DE nvarchar(4),
	@Qualifier nvarchar(10),
    @Version float,    
    @Lbc1 nvarchar(60),
    @Lbc2 nvarchar(60),
    @Lbc3 nvarchar(60),
    @Lbc4 nvarchar(60)    
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO TbQualifiers
        (DE, Qualifier, Version, Lbc1, Lbc2, Lbc3, Lbc4)
    VALUES
        ( @DE, @Qualifier, @Version, @Lbc1, @Lbc2, @Lbc3, @Lbc4)
END