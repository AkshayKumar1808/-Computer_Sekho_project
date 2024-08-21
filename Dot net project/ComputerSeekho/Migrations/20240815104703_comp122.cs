using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class comp122 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ImageMaster_AlbumMaster_Aid",
                table: "ImageMaster");

            migrationBuilder.DropIndex(
                name: "IX_ImageMaster_Aid",
                table: "ImageMaster");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_ImageMaster_Aid",
                table: "ImageMaster",
                column: "Aid");

            migrationBuilder.AddForeignKey(
                name: "FK_ImageMaster_AlbumMaster_Aid",
                table: "ImageMaster",
                column: "Aid",
                principalTable: "AlbumMaster",
                principalColumn: "AlbumId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
