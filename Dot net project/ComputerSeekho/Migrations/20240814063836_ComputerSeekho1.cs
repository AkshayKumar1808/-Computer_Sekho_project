using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class ComputerSeekho1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AlbumId",
                table: "ImageMaster",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ImageMaster_AlbumId",
                table: "ImageMaster",
                column: "AlbumId");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumId",
                table: "ImageMaster",
                column: "AlbumId",
                principalTable: "AlbumMaster",
                principalColumn: "AlbumId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumId",
                table: "ImageMaster");

            migrationBuilder.DropIndex(
                name: "IX_ImageMaster_AlbumId",
                table: "ImageMaster");

            migrationBuilder.DropColumn(
                name: "AlbumId",
                table: "ImageMaster");
        }
    }
}
