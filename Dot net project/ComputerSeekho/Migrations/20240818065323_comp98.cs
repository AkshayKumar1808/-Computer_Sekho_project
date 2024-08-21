using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class comp98 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_staffmasters",
                table: "staffmasters");

            migrationBuilder.RenameTable(
                name: "staffmasters",
                newName: "StaffMaster");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StaffMaster",
                table: "StaffMaster",
                column: "Staffid");

            migrationBuilder.CreateTable(
                name: "AdminLogins",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Sid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AdminLogins", x => x.Email);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AdminLogins");

            migrationBuilder.DropPrimaryKey(
                name: "PK_StaffMaster",
                table: "StaffMaster");

            migrationBuilder.RenameTable(
                name: "StaffMaster",
                newName: "staffmasters");

            migrationBuilder.AddPrimaryKey(
                name: "PK_staffmasters",
                table: "staffmasters",
                column: "Staffid");
        }
    }
}
