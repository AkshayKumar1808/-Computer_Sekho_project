using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class cm00 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_adminEnquiry",
                table: "adminEnquiry");

            migrationBuilder.RenameTable(
                name: "adminEnquiry",
                newName: "AdminEnquiry");

            migrationBuilder.RenameColumn(
                name: "Staffid",
                table: "StaffMaster",
                newName: "StaffId");

            migrationBuilder.AlterColumn<int>(
                name: "Sid",
                table: "AdminEnquiry",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "Cid",
                table: "AdminEnquiry",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AdminEnquiry",
                table: "AdminEnquiry",
                column: "EnquiryId");

            migrationBuilder.CreateTable(
                name: "Followups",
                columns: table => new
                {
                    FollowupId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FollowupDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FollowupMsg = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: true),
                    EId = table.Column<int>(type: "int", nullable: true),
                    StId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Followups", x => x.FollowupId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Followups");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AdminEnquiry",
                table: "AdminEnquiry");

            migrationBuilder.RenameTable(
                name: "AdminEnquiry",
                newName: "adminEnquiry");

            migrationBuilder.RenameColumn(
                name: "StaffId",
                table: "StaffMaster",
                newName: "Staffid");

            migrationBuilder.AlterColumn<int>(
                name: "Sid",
                table: "adminEnquiry",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Cid",
                table: "adminEnquiry",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_adminEnquiry",
                table: "adminEnquiry",
                column: "EnquiryId");
        }
    }
}
