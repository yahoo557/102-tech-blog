-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: umc3rd
-- Generation Time: 2022-11-14 16:11:10.0810
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS seq_post_id;

-- Table Definition
CREATE TABLE "public"."post" (
    "id" int4 NOT NULL DEFAULT nextval('seq_post_id'::regclass),
    "title" varchar(255),
    "body" text,
    "writer" int4,
    "updatedate" timestamp,
    "createdate" timestamp DEFAULT now(),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."post" ("id", "title", "body", "writer", "updatedate", "createdate") VALUES
(1, '테스트 게시글 1', '테스트 본문 1', 1, NULL, '2022-11-06 13:58:01.98207'),
(2, '테스트 타이틀 2', '테스트 본문 2', 2, NULL, '2022-11-06 13:58:18.269339'),
(4, '테스트 타이틀3 ', '테스트 바디 3', 40, NULL, '2022-11-06 15:07:06.299296'),
(5, '테스트 타이틀3 ', '테스트 바디 3', 9, NULL, '2022-11-06 15:07:23.171646'),
(6, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 14, NULL, '2022-11-06 16:04:58.429141'),
(7, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 44, NULL, '2022-11-06 16:05:48.954645'),
(8, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 64, NULL, '2022-11-06 16:06:13.164783'),
(9, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 11, NULL, '2022-11-06 16:06:24.327459'),
(10, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 58, NULL, '2022-11-06 16:06:37.035825'),
(11, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 61, NULL, '2022-11-06 16:07:32.38522'),
(12, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 29, NULL, '2022-11-06 16:35:33.627049'),
(13, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 72, NULL, '2022-11-06 16:36:16.667644'),
(14, '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 36, NULL, '2022-11-06 16:36:29.472862');
