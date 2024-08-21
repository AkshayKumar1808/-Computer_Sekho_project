using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class como41 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PlacementMaster_StudentMaster_StudentMasterStudentId",
                table: "PlacementMaster");

            migrationBuilder.DropIndex(
                name: "IX_PlacementMaster_StudentMasterStudentId",
                table: "PlacementMaster");

            migrationBuilder.DropColumn(
                name: "StudentMasterStudentId",
                table: "PlacementMaster");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StudentMasterStudentId",
                table: "PlacementMaster",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PlacementMaster_StudentMasterStudentId",
                table: "PlacementMaster",
                column: "StudentMasterStudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_PlacementMaster_StudentMaster_StudentMasterStudentId",
                table: "PlacementMaster",
                column: "StudentMasterStudentId",
                principalTable: "StudentMaster",
                principalColumn: "StudentId");
        }
    }
}
