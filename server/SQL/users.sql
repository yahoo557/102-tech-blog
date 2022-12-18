CREATE SEQUENCE IF NOT EXISTS seq_users_id START 1;

CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('seq_users_id'::regclass),
    "username" varchar(50),
    "password" varchar(255),
    "nickname" varchar(50),
    "status" varchar(10),
    "created_at" timestamp DEFAULT now(),
    "updated_at" timestamp DEFAULT now(),
    PRIMARY KEY ("id")
);

CREATE  FUNCTION update_updated_at_users()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
		RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE
    ON
        users
    FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_users();
