-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT,
    "price" TEXT,
    "category" JSONB,
    "manufacturer" TEXT,
    "model" TEXT,
    "quantity" INTEGER DEFAULT 0,
    "status" BOOLEAN NOT NULL,
    "images" JSONB,
    "thumbnail" TEXT NOT NULL,
    "size" JSONB,
    "parameters" JSONB,
    "sales" INTEGER,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "reviews" JSONB,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
