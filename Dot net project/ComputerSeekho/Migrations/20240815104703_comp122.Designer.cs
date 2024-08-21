﻿// <auto-generated />
using System;
using ComputerSeekho.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ComputerSeekho.Migrations
{
    [DbContext(typeof(AppdbContext))]
    [Migration("20240815104703_comp122")]
    partial class comp122
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ComputerSeekho.Models.AlbumMaster", b =>
                {
                    b.Property<int>("AlbumId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AlbumId"));

                    b.Property<string>("AlbumName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.HasKey("AlbumId");

                    b.ToTable("AlbumMaster");
                });

            modelBuilder.Entity("ComputerSeekho.Models.Followup", b =>
                {
                    b.Property<int>("FollowupId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FollowupId"));

                    b.Property<int?>("EId")
                        .HasColumnType("int");

                    b.Property<DateTime?>("FollowupDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FollowupMsg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool?>("IsActive")
                        .HasColumnType("bit");

                    b.Property<int?>("StId")
                        .HasColumnType("int");

                    b.HasKey("FollowupId");

                    b.ToTable("FollowupMaster");
                });

            modelBuilder.Entity("ComputerSeekho.Models.Image", b =>
                {
                    b.Property<int>("PathId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("PathId"));

                    b.Property<int>("Aid")
                        .HasColumnType("int");

                    b.Property<string>("PathName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PathId");

                    b.ToTable("ImageMaster");
                });
#pragma warning restore 612, 618
        }
    }
}
