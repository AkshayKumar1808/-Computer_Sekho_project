using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class ComputerSeekho2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumId",
                table: "ImageMaster");

            migrationBuilder.DropColumn(
                name: "Aid",
                table: "ImageMaster");

            migrationBuilder.RenameColumn(
                name: "AlbumId",
                table: "ImageMaster",
                newName: "AlbumMaster");

            migrationBuilder.RenameIndex(
                name: "IX_ImageMaster_AlbumId",
                table: "ImageMaster",
                newName: "IX_ImageMaster_AlbumMaster");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumMaster",
                table: "ImageMaster",
                column: "AlbumMaster",
                principalTable: "AlbumMaster",
                principalColumn: "AlbumId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumMaster",
                table: "ImageMaster");

            migrationBuilder.RenameColumn(
                name: "AlbumMaster",
                table: "ImageMaster",
                newName: "AlbumId");

            migrationBuilder.RenameIndex(
                name: "IX_ImageMaster_AlbumMaster",
                table: "ImageMaster",
                newName: "IX_ImageMaster_AlbumId");

            migrationBuilder.AddColumn<int>(
                name: "Aid",
                table: "ImageMaster",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumId",
                table: "ImageMaster",
                column: "AlbumId",
                principalTable: "AlbumMaster",
                principalColumn: "AlbumId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
