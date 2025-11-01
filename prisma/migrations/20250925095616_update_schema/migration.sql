/*
  Warnings:

  - The primary key for the `SYS_ACCESSRIGHT` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."SYS_ACCESSRIGHT" DROP CONSTRAINT "SYS_ACCESSRIGHT_pkey",
ADD CONSTRAINT "SYS_ACCESSRIGHT_pkey" PRIMARY KEY ("userid");
