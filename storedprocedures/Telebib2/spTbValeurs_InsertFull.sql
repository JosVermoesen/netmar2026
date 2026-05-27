CREATE PROCEDURE [spTb2Valeurs_InsertFull]
    @Code nvarchar(4),
	@Valeur nvarchar(10),
    @Lbc1 nvarchar(20),
    @Lbc2 nvarchar(20),    
    @Lbl1 nvarchar(60),
    @Lbl2 nvarchar(60),
    @Lbl3 nvarchar(60),
    @Lbl4 nvarchar(60)    
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO TbValeurs
        (Code, Valeur, Lbc1, Lbc2, Lbl1, Lbl2, Lbl3, Lbl4)
    VALUES     
        ( @Code, @Valeur, @Lbc1, @Lbc2, @Lbl1, @Lbl2, @Lbl3, @Lbl4)
END
