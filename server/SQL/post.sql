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
CREATE SEQUENCE IF NOT EXISTS seq_post_id START 1;

-- Table Definition
CREATE TABLE "public"."post" (
    "id" int4 NOT NULL DEFAULT nextval('seq_post_id'::regclass),
    "title" varchar(255),
    "body" text,
    "user_id" int4,
    "status" varchar(10) DEFAULT 'ONLINE',
    "like_count" int4 DEFAULT 0,
    "view_count" int4 DEFAULT 0,
    "updated_at" timestamp DEFAULT now(),
    "created_at" timestamp DEFAULT now(),
    PRIMARY KEY ("id")
);
CREATE  FUNCTION update_updated_at_post()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
		RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_post_updated_at
    BEFORE UPDATE
    ON
        post
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_post();


INSERT INTO "public"."post" ("title", "body", "user_id" ) VALUES
( '테스트 게시글 1', '테스트 본문 1', 1 ),
( '테스트 타이틀 2', '테스트 본문 2', 2 ),
('테스트 타이틀3 ', '테스트 바디 3', 40),
('테스트 타이틀3 ', '테스트 바디 3', 9),
('게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 14),
('게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 44),
('게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 64),
('게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 11),
( '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 58),
( '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 61),
( '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 29),
( '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 72),
( '게시글 작성 테스트 타이틀', '게시글 작성 테스트 바디', 36);
