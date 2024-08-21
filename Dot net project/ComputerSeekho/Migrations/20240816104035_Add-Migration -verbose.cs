using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ComputerSeekho.Migrations
{
    /// <inheritdoc />
    public partial class AddMigrationverbose : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FollowupMaster");

            migrationBuilder.CreateTable(
                name: "adminEnquiry",
                columns: table => new
                {
                    EnquiryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Mobile = table.Column<long>(type: "bigint", nullable: false),
                    AlternateMobile = table.Column<long>(type: "bigint", nullable: false),
                    EmailId = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnquirerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    EnquirerQuery = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnquiryDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FollowUpDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Cid = table.Column<int>(type: "int", nullable: false),
                    Sid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_adminEnquiry", x => x.EnquiryId);
                });

            migrationBuilder.CreateTable(
                name: "Announcements",
                columns: table => new
                {
                    AnnouncementId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AnnouncementText = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AnnouncementDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    isValid = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Announcements", x => x.AnnouncementId);
                });

            migrationBuilder.CreateTable(
                name: "BatchMaster",
                columns: table => new
                {
                    BatchId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BatchName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BatchStartDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    BatchEndTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    CourseFees = table.Column<int>(type: "int", nullable: false),
                    BatchIsActive = table.Column<bool>(type: "bit", nullable: true),
                    Cid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BatchMaster", x => x.BatchId);
                });

            migrationBuilder.CreateTable(
                name: "courses",
                columns: table => new
                {
                    CourseId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CourseDuration = table.Column<int>(type: "int", nullable: false),
                    CourseIsActive = table.Column<bool>(type: "bit", nullable: false),
                    CourseName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CourseSyllabus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_courses", x => x.CourseId);
                });

            migrationBuilder.CreateTable(
                name: "staffmasters",
                columns: table => new
                {
                    Staffid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Staffemail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Staffmobile = table.Column<long>(type: "bigint", nullable: false),
                    Staffname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Staffrole = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_staffmasters", x => x.Staffid);
                });

            migrationBuilder.CreateTable(
                name: "StudentMaster",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Dob = table.Column<DateTime>(type: "datetime2", nullable: true),
                    MobileNum = table.Column<long>(type: "bigint", nullable: true),
                    StudentGender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentQualification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    StudentPhoto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AlternateNum = table.Column<long>(type: "bigint", nullable: false),
                    BId = table.Column<int>(type: "int", nullable: true),
                    CId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentMaster", x => x.StudentId);
                });

            migrationBuilder.CreateTable(
                name: "PlacementMaster",
                columns: table => new
                {
                    PlacementId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Duration = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BId = table.Column<int>(type: "int", nullable: true),
                    CId = table.Column<int>(type: "int", nullable: true),
                    SId = table.Column<int>(type: "int", nullable: true),
                    StudentMasterStudentId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PlacementMaster", x => x.PlacementId);
                    table.ForeignKey(
                        name: "FK_PlacementMaster_StudentMaster_StudentMasterStudentId",
                        column: x => x.StudentMasterStudentId,
                        principalTable: "StudentMaster",
                        principalColumn: "StudentId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_PlacementMaster_StudentMasterStudentId",
                table: "PlacementMaster",
                column: "StudentMasterStudentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "adminEnquiry");

            migrationBuilder.DropTable(
                name: "Announcements");

            migrationBuilder.DropTable(
                name: "BatchMaster");

            migrationBuilder.DropTable(
                name: "courses");

            migrationBuilder.DropTable(
                name: "PlacementMaster");

            migrationBuilder.DropTable(
                name: "staffmasters");

            migrationBuilder.DropTable(
                name: "StudentMaster");

            migrationBuilder.CreateTable(
                name: "FollowupMaster",
                columns: table => new
                {
                    FollowupId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EId = table.Column<int>(type: "int", nullable: true),
                    FollowupDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FollowupMsg = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsActive = table.Column<bool>(type: "bit", nullable: true),
                    StId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FollowupMaster", x => x.FollowupId);
                });
        }
    }
}
