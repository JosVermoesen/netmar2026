using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Line1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Line2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PostalCode = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DeliveryMethods",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ShortName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeliveryTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeliveryMethods", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PictureUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    QuantityInStock = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VsoftCustomers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    A110 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    E072 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G101 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G102 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G103 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G104 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G105 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    G106 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A10c = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A104 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A105 = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    A106 = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    A107 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    A108 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V149 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    A109 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    V150 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    Vs03 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    V161 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    A161 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V404 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V151 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V111 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V254 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    V255 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V256 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A170 = table.Column<string>(type: "nvarchar(14)", maxLength: 14, nullable: true),
                    Vs04 = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    Vs05 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    Vs06 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    Vs07 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V225 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V227 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V247 = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    A10a = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Vs02 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    V224 = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: true),
                    A123 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A124 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A121 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    A122 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    V259 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V260 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E070 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E071 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V252 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A191 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    A192 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    A193 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    A194 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    A197 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    _510z = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A130 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V301 = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    A102 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A100 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A101 = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    V226 = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    V243 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V302 = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    Vs01 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A125 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A127 = table.Column<string>(type: "nvarchar(25)", maxLength: 25, nullable: true),
                    V002 = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: true),
                    V257 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V258 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V244 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V251 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A120 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V201 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V202 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V203 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V204 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V205 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V206 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V207 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V208 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V209 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V210 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V211 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V245 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V246 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V253 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Uxxx = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V262 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    V263 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    V407 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftCustomers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VsoftLedgerAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    V019 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    V020 = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    Dece022 = table.Column<decimal>(type: "money", nullable: false),
                    Dece023 = table.Column<decimal>(type: "money", nullable: false),
                    Dece024 = table.Column<decimal>(type: "money", nullable: false),
                    Dece025 = table.Column<decimal>(type: "money", nullable: false),
                    Dece026 = table.Column<decimal>(type: "money", nullable: false),
                    Dece027 = table.Column<decimal>(type: "money", nullable: false),
                    Dece028 = table.Column<decimal>(type: "money", nullable: false),
                    Dece029 = table.Column<decimal>(type: "money", nullable: false),
                    Dece030 = table.Column<decimal>(type: "money", nullable: false),
                    Dece031 = table.Column<decimal>(type: "money", nullable: false),
                    V021 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V032 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V216 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftLedgerAccounts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VsoftSuppliers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    A110 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    A102 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A100 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Vs01 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A125 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A10c = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A104 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A105 = table.Column<string>(type: "nvarchar(5)", maxLength: 5, nullable: true),
                    A106 = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    A107 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    A108 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V149 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    A109 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    V150 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    Vs03 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    A10a = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    Vs02 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    V224 = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: true),
                    V163 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V016 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    V161 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    A161 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V404 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A170 = table.Column<string>(type: "nvarchar(14)", maxLength: 14, nullable: true),
                    V259 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V260 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A400 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V015 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V151 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V111 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    Vs04 = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    V017 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V018 = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: true),
                    V001 = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    V002 = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    V226 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V227 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V247 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V254 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V255 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V256 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V262 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftSuppliers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    BerNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClientNumber = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    AddressId = table.Column<int>(type: "int", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VsoftContracts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    A000 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    A110 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    V223 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: false),
                    A010 = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    Vs99 = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Vs98 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    V164 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    V165 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    Aw2 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    A325 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    A600 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    Vs97 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    B010 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    B014 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V166 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    Vs96 = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    V167 = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    DecB010 = table.Column<decimal>(type: "money", nullable: false),
                    DecB014 = table.Column<decimal>(type: "money", nullable: false),
                    Dece069 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E069 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E070 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E071 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E072 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    VsoftCustomerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftContracts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VsoftContracts_VsoftCustomers_VsoftCustomerId",
                        column: x => x.VsoftCustomerId,
                        principalTable: "VsoftCustomers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VsoftCustomerInvoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    V033 = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    A110 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    V035 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V066 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V036 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V037 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V038 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V249 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    Decv249 = table.Column<decimal>(type: "money", nullable: false),
                    V039 = table.Column<string>(type: "nvarchar(35)", maxLength: 35, nullable: true),
                    Vs03 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    V040 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    Decv040 = table.Column<decimal>(type: "money", nullable: false),
                    V041 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V245 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V246 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    A000 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    B010 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    DecB010 = table.Column<decimal>(type: "money", nullable: false),
                    B014 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    DecB014 = table.Column<decimal>(type: "money", nullable: false),
                    B090 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    DecB090 = table.Column<decimal>(type: "money", nullable: false),
                    B094 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    DecB094 = table.Column<decimal>(type: "money", nullable: false),
                    V065 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv065 = table.Column<decimal>(type: "money", nullable: false),
                    E069 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Dece069 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E071 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    E072 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V055 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv055 = table.Column<decimal>(type: "money", nullable: false),
                    V056 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv056 = table.Column<decimal>(type: "money", nullable: false),
                    V057 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv057 = table.Column<decimal>(type: "money", nullable: false),
                    V058 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv058 = table.Column<decimal>(type: "money", nullable: false),
                    V059 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv059 = table.Column<decimal>(type: "money", nullable: false),
                    V060 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv060 = table.Column<decimal>(type: "money", nullable: false),
                    V061 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv061 = table.Column<decimal>(type: "money", nullable: false),
                    V062 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv062 = table.Column<decimal>(type: "money", nullable: false),
                    V063 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv063 = table.Column<decimal>(type: "money", nullable: false),
                    V064 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv064 = table.Column<decimal>(type: "money", nullable: false),
                    RvDm = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RvXmltb2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    V405 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    V406 = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: true),
                    VsoftCustomerId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftCustomerInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VsoftCustomerInvoices_VsoftCustomers_VsoftCustomerId",
                        column: x => x.VsoftCustomerId,
                        principalTable: "VsoftCustomers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VsoftLedgers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    V019 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    V070 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    V034 = table.Column<string>(type: "nvarchar(13)", maxLength: 13, nullable: true),
                    V066 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V033 = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: true),
                    V038 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V035 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V067 = table.Column<string>(type: "nvarchar(35)", maxLength: 35, nullable: true),
                    V068 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    V069 = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: true),
                    V041 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V249 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V248 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    V245 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V246 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Dece068 = table.Column<decimal>(type: "money", nullable: false),
                    V102 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VsoftLedgerAccountId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftLedgers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VsoftLedgers_VsoftLedgerAccounts_VsoftLedgerAccountId",
                        column: x => x.VsoftLedgerAccountId,
                        principalTable: "VsoftLedgerAccounts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VsoftSupplierInvoices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    V033 = table.Column<string>(type: "nvarchar(11)", maxLength: 11, nullable: false),
                    A110 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: false),
                    V035 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V066 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V036 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V037 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V038 = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    V249 = table.Column<string>(type: "nvarchar(12)", maxLength: 12, nullable: true),
                    Decv249 = table.Column<decimal>(type: "money", nullable: false),
                    V039 = table.Column<string>(type: "nvarchar(35)", maxLength: 35, nullable: true),
                    Vs03 = table.Column<string>(type: "nvarchar(3)", maxLength: 3, nullable: true),
                    V040 = table.Column<string>(type: "nvarchar(15)", maxLength: 15, nullable: true),
                    Decv040 = table.Column<decimal>(type: "money", nullable: false),
                    V041 = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    V245 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V246 = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    RvDm = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    V042 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V043 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V044 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V045 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V046 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V047 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V048 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V049 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V050 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V051 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V052 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V053 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    V054 = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Decv042 = table.Column<decimal>(type: "money", nullable: false),
                    Decv043 = table.Column<decimal>(type: "money", nullable: false),
                    Decv044 = table.Column<decimal>(type: "money", nullable: false),
                    Decv045 = table.Column<decimal>(type: "money", nullable: false),
                    Decv046 = table.Column<decimal>(type: "money", nullable: false),
                    Decv047 = table.Column<decimal>(type: "money", nullable: false),
                    Decv048 = table.Column<decimal>(type: "money", nullable: false),
                    Decv049 = table.Column<decimal>(type: "money", nullable: false),
                    Decv050 = table.Column<decimal>(type: "money", nullable: false),
                    Decv051 = table.Column<decimal>(type: "money", nullable: false),
                    Decv052 = table.Column<decimal>(type: "money", nullable: false),
                    Decv053 = table.Column<decimal>(type: "money", nullable: false),
                    Decv054 = table.Column<decimal>(type: "money", nullable: false),
                    VsoftSupplierId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftSupplierInvoices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VsoftSupplierInvoices_VsoftSuppliers_VsoftSupplierId",
                        column: x => x.VsoftSupplierId,
                        principalTable: "VsoftSuppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VsoftTelebibContracts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Mij = table.Column<string>(type: "nvarchar(4)", maxLength: 4, nullable: true),
                    MemoTb2 = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DocType = table.Column<string>(type: "nvarchar(2)", maxLength: 2, nullable: true),
                    VsoftContractId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VsoftTelebibContracts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VsoftTelebibContracts_VsoftContracts_VsoftContractId",
                        column: x => x.VsoftContractId,
                        principalTable: "VsoftContracts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_AddressId",
                table: "AspNetUsers",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_VsoftContracts_A000",
                table: "VsoftContracts",
                column: "A000",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftContracts_VsoftCustomerId",
                table: "VsoftContracts",
                column: "VsoftCustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_VsoftCustomerInvoices_V033",
                table: "VsoftCustomerInvoices",
                column: "V033",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftCustomerInvoices_VsoftCustomerId",
                table: "VsoftCustomerInvoices",
                column: "VsoftCustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_VsoftCustomers_A110",
                table: "VsoftCustomers",
                column: "A110",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftLedgerAccounts_V019",
                table: "VsoftLedgerAccounts",
                column: "V019",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftLedgers_VsoftLedgerAccountId",
                table: "VsoftLedgers",
                column: "VsoftLedgerAccountId");

            migrationBuilder.CreateIndex(
                name: "IX_VsoftSupplierInvoices_V033",
                table: "VsoftSupplierInvoices",
                column: "V033",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftSupplierInvoices_VsoftSupplierId",
                table: "VsoftSupplierInvoices",
                column: "VsoftSupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_VsoftSuppliers_A110",
                table: "VsoftSuppliers",
                column: "A110",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_VsoftTelebibContracts_VsoftContractId",
                table: "VsoftTelebibContracts",
                column: "VsoftContractId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "DeliveryMethods");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "VsoftCustomerInvoices");

            migrationBuilder.DropTable(
                name: "VsoftLedgers");

            migrationBuilder.DropTable(
                name: "VsoftSupplierInvoices");

            migrationBuilder.DropTable(
                name: "VsoftTelebibContracts");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "VsoftLedgerAccounts");

            migrationBuilder.DropTable(
                name: "VsoftSuppliers");

            migrationBuilder.DropTable(
                name: "VsoftContracts");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "VsoftCustomers");
        }
    }
}
