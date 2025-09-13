-- CreateEnum
CREATE TYPE "public"."payment_method" AS ENUM ('card', 'upi', 'netbanking');

-- CreateEnum
CREATE TYPE "public"."subscriptio_type" AS ENUM ('BASIC', 'PERMIUM', 'ELITE');

-- CreateTable
CREATE TABLE "public"."user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."subsription" (
    "id" SERIAL NOT NULL,
    "subscriptio_type" "public"."subscriptio_type" NOT NULL,
    "amount" INTEGER NOT NULL,
    "payment_method" "public"."payment_method" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "subsription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."note" ADD CONSTRAINT "note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."subsription" ADD CONSTRAINT "subsription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
