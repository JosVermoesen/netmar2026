CREATE PROCEDURE [spVsoftTelebibContracts_InsertFull]
    @Mij nvarchar(4),
    @MemoTb2 nvarchar(max),
    @DocType nvarchar(2),
    @VsoftContractId nvarchar(12)
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO VsoftTelebibContracts
        ( Mij, MemoTb2, DocType, VsoftContractId)
    VALUES
        ( @Mij, @MemoTb2, @DocType, @VsoftContractId)
END
