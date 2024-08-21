using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class ComputerSeekho5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_AlbumMaster",
                table: "ImageMaster");

            migrationBuilder.RenameColumn(
                name: "AlbumMaster",
                table: "ImageMaster",
                newName: "Aid");

            migrationBuilder.RenameIndex(
                name: "IX_ImageMaster_AlbumMaster",
                table: "ImageMaster",
                newName: "IX_ImageMaster_Aid");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageMaster_AlbumMaster_Aid",
                table: "ImageMaster",
                column: "Aid",
                principalTable: "AlbumMaster",
                principalColumn: "AlbumId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_Aid",
                table: "ImageMaster");

            migrationBuilder.RenameColumn(
                name: "Aid",
                table: "ImageMaster",
                newName: "AlbumMaster");

            migrationBuilder.RenameIndex(
                name: "IX_ImageMaster_Aid",
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
    }
}
