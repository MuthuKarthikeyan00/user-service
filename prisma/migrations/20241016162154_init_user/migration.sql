-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "user_code" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "display_name" VARCHAR(255) NOT NULL,
    "company_id" BIGINT NOT NULL,
    "company_branch_id" BIGINT NOT NULL,
    "profile" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "role_id" SMALLINT,
    "current_address" VARCHAR(255),
    "permanent_address" VARCHAR(255),
    "city" VARCHAR(255),
    "postcode" INTEGER,
    "country" SMALLINT NOT NULL,
    "state" SMALLINT,
    "created_by" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRole" (
    "id" SERIAL NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "created_by" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLoginLog" (
    "id" BIGSERIAL NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "status" INTEGER NOT NULL,
    "mac_address" VARCHAR(50) NOT NULL,
    "user_id" BIGINT NOT NULL,
    "system_info" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLoginLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" BIGSERIAL NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "status" INTEGER NOT NULL,
    "system_info" JSONB NOT NULL,
    "created_by" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyBranch" (
    "id" BIGSERIAL NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "company_id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "status" INTEGER NOT NULL,
    "system_info" JSONB NOT NULL,
    "created_by" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_by" INTEGER,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "CompanyBranch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "UserRole_name_key" ON "UserRole"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyBranch_name_key" ON "CompanyBranch"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "UserRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_branch_id_fkey" FOREIGN KEY ("company_branch_id") REFERENCES "CompanyBranch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLoginLog" ADD CONSTRAINT "UserLoginLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompanyBranch" ADD CONSTRAINT "CompanyBranch_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
