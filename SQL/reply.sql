CREATE SEQUENCE IF NOT EXISTS seq_reply_id START 1;

-- Table Definition
CREATE TABLE "public"."reply" (
    "id" int4 NOT NULL DEFAULT nextval('seq_reply_id'::regclass),
    "body" text,
    "user_id" int4,
    "status" varchar(10) DEFAULT 'ONLINE',
    "updated_at" timestamp DEFAULT now(),
    "created_at" timestamp DEFAULT now(),
    PRIMARY KEY ("id")
);
CREATE  FUNCTION update_updated_at_reply()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
		RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_reply_updated_at
    BEFORE UPDATE
    ON
        reply
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_reply();