-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "SignatureMeasure" AS ENUM ('1', '2', '4', '8', '16', '32');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "password" CHAR(64) NOT NULL,
    "type" "UserType" NOT NULL DEFAULT 'USER',
    "name" VARCHAR(35),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patterns" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" VARCHAR(100),
    "signature_bits" SMALLINT NOT NULL,
    "signature_measure" "SignatureMeasure" NOT NULL DEFAULT '4',
    "tempo" SMALLINT,
    "beats" JSONB NOT NULL DEFAULT '[]',
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "patterns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "patterns_tags" (
    "pattern_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "patterns_tags_pkey" PRIMARY KEY ("pattern_id","tag_id")
);

-- CreateTable
CREATE TABLE "drafts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "structure" JSONB NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "drafts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pattern_samples" (
    "id" SERIAL NOT NULL,
    "draft_id" INTEGER NOT NULL,
    "pattern_id" INTEGER NOT NULL,
    "code" VARCHAR(2) NOT NULL,
    "color" VARCHAR(7) NOT NULL,

    CONSTRAINT "pattern_samples_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pattern_search_data" (
    "pattern_id" INTEGER NOT NULL,
    "groove_vector" DOUBLE PRECISION[],
    "hyperplane_hash" INTEGER[],

    CONSTRAINT "pattern_search_data_pkey" PRIMARY KEY ("pattern_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE INDEX "patterns_beats_idx" ON "patterns" USING GIN ("beats");

-- CreateIndex
CREATE INDEX "drafts_structure_idx" ON "drafts" USING GIN ("structure");

-- CreateIndex
CREATE UNIQUE INDEX "pattern_samples_draft_id_code_key" ON "pattern_samples"("draft_id", "code");

-- CreateIndex
CREATE INDEX "pattern_search_data_hyperplane_hash_idx" ON "pattern_search_data" USING HASH ("hyperplane_hash");

-- AddForeignKey
ALTER TABLE "patterns" ADD CONSTRAINT "patterns_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patterns_tags" ADD CONSTRAINT "patterns_tags_pattern_id_fkey" FOREIGN KEY ("pattern_id") REFERENCES "patterns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "patterns_tags" ADD CONSTRAINT "patterns_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "drafts" ADD CONSTRAINT "drafts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pattern_samples" ADD CONSTRAINT "pattern_samples_draft_id_fkey" FOREIGN KEY ("draft_id") REFERENCES "drafts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pattern_samples" ADD CONSTRAINT "pattern_samples_pattern_id_fkey" FOREIGN KEY ("pattern_id") REFERENCES "patterns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pattern_search_data" ADD CONSTRAINT "pattern_search_data_pattern_id_fkey" FOREIGN KEY ("pattern_id") REFERENCES "patterns"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
