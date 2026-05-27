CREATE PROCEDURE [spVsoftKboEnterprises_InsertFull]
    @EnterpriseNumber nvarchar(20),
    @Status nvarchar(2),
    @JuridicalSituation nvarchar(3),
    @TypeOfEnterprise nvarchar(1),
    @JuridicalForm nvarchar(3),
    @StartDate datetime2(7)    
AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO VsoftKboEnterprises
        ( EnterpriseNumber, Status, JuridicalSituation, TypeOfEnterprise, JuridicalForm, StartDate )
    VALUES
        ( @EnterpriseNumber, @Status, @JuridicalSituation, @TypeOfEnterprise, @JuridicalForm, @StartDate )
END
