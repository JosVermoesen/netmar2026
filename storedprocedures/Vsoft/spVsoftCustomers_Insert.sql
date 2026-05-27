CREATE PROCEDURE [spVsoftCustomers_Insert]
    @Id nvarchar(12),
    @A107 nvarchar(7) = NULL,
    @A108 nvarchar(24) = NULL,
    @A100 nvarchar(35) = NULL

AS
BEGIN
    SET NOCOUNT ON

    insert into VsoftCustomers
        ( Id, A107, A108, A100)

    values
        (
            @Id, @A107, @A108, @A100)
END