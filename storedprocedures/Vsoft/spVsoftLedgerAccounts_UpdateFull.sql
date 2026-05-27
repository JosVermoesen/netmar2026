CREATE PROCEDURE [spVsoftLedgerAccounts_UpdateFull]
    @V019 nvarchar(7),
    @V020 nvarchar(40),
    @Dece022 money,
    @Dece023 money,
    @Dece024 money,
    @Dece025 money,
    @Dece026 money,
    @Dece027 money,
    @Dece028 money,
    @Dece029 money,
    @Dece030 money,
    @Dece031 money,
    @V021 nvarchar(50),
    @V032 nvarchar(1),
    @V216 nvarchar(2)
AS
BEGIN
    SET NOCOUNT ON
    UPDATE VsoftLedgerAccounts SET  
    V019 = @V019,
    V020 = @V020,
    Dece022 = @Dece022,
    Dece023 = @Dece023,
    Dece024 = @Dece024,
    Dece025 = @Dece025,
    Dece026 = @Dece026,
    Dece027 = @Dece027,
    Dece028 = @Dece028,
    Dece029 = @Dece029,
    Dece030 = @Dece030,
    Dece031 = @Dece031,
    V021 = @V021,
    V032 = @V032,
    V216 = @V216    
    WHERE V019 = @V019          
END  