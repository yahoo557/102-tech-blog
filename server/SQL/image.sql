CREATE SEQUENCE IF NOT EXISTS seq_image_id START 1;
CREATE TABLE "public"."image" (
    "id" int4 NOT NULL DEFAULT nextval('seq_image_id'::regclass),
    "url" TEXT NOT NULL,
    "status" varchar(10) DEFAULT 'ONLINE',
    "updated_at" timestamp DEFAULT now(),
    "created_at" timestamp DEFAULT now(),
    PRIMARY KEY ("id")
);
CREATE  FUNCTION update_updated_at_image()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
		RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_image_updated_at
    BEFORE UPDATE
    ON
        image
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_image();

INSERT INTO "public"."image" ( "url" ) VALUES 
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BC01.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%AE%E1%86%BC02.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB01.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%AF01.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%AF02.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A5%E1%86%AF03.png'),
    ('https://random-chan-ho-generator.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%B4%E1%84%80%E1%85%B101.png');
