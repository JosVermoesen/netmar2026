CREATE PROCEDURE [spVsoftContracts_InsertFull]
    @A000 nvarchar(12),
    @A110 nvarchar(12),
    @A010 nvarchar(4),    
    @Vs99 nvarchar(30),
    @Vs98 nvarchar(max),
    @V164 nvarchar(2),
    @V165 nvarchar(2),
    @Aw2 nvarchar(8),
    @A325 nvarchar(1),
    @A600 nvarchar(1),
    @Vs97 nvarchar(1),
    @B010 nvarchar(10),
    @B014 nvarchar(10),
    @V166 nvarchar(1),
    @V223 nvarchar(3),
    @Vs96 nvarchar(2),
    @V167 nvarchar(30),
    @DecB010 money,
    @DecB014 money,
    @Dece069 nvarchar(max),
    @E069 nvarchar(50),
    @E070 nvarchar(50),
    @E071 nvarchar(50),
    @E072 nvarchar(50),    
    @VsoftCustomerId int
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO VsoftContracts
        ( A000, A110, A010, Vs99, Vs98, V164, V165, Aw2, A325,
        A600, Vs97, B010, B014, V166, V223, Vs96, V167, DecB010,
        DecB014, Dece069, E069, E070, E071, E072, VsoftCustomerId)
    VALUES
        ( @A000, @A110, @A010, @Vs99, @Vs98, @V164, @V165, @Aw2, @A325,
            @A600, @Vs97, @B010, @B014, @V166, @V223, @Vs96, @V167, @DecB010,
            @DecB014, @Dece069, @E069, @E070, @E071, @E072, @VsoftCustomerId)
END