CREATE SEQUENCE public.usr_list_user_seq;
CREATE SEQUENCE public.l4w_event_id_seq;
CREATE SEQUENCE public.l4w_role_role_seq;


CREATE TABLE public.log_security
(
    event character varying(15) COLLATE pg_catalog."default" NOT NULL,
    info character varying(127) COLLATE pg_catalog."default",
    date timestamp with time zone,
    CONSTRAINT log_security_key PRIMARY KEY (event)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.usr_list
(
    "user" integer NOT NULL DEFAULT nextval('usr_list_user_seq'::regclass),
    mail character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT usr_list_key PRIMARY KEY ("user")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.lst_role
(
    role integer NOT NULL DEFAULT nextval('l4w_role_role_seq'::regclass),
    name character varying(31) COLLATE pg_catalog."default",
    CONSTRAINT l4w_role_key PRIMARY KEY (role)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.usr_save
(
    "user" integer NOT NULL,
    id integer NOT NULL,
    date timestamp with time zone,
    name character(31) COLLATE pg_catalog."default",
    save json NOT NULL,
    CONSTRAINT usr_save_key PRIMARY KEY ("user", id),
    CONSTRAINT usr_save_user FOREIGN KEY ("user")
        REFERENCES public.usr_list ("user") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.usr_role
(
    "user" integer NOT NULL,
    role integer NOT NULL,
    CONSTRAINT usr_role_key PRIMARY KEY ("user", role),
    CONSTRAINT usr_role_role FOREIGN KEY (role)
        REFERENCES public.lst_role (role) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT usr_role_user FOREIGN KEY ("user")
        REFERENCES public.usr_list ("user") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.lst_event
(
    event integer NOT NULL DEFAULT nextval('l4w_event_id_seq'::regclass),
    message character varying(511) COLLATE pg_catalog."default",
    type character(1) COLLATE pg_catalog."default",
    action character(31) COLLATE pg_catalog."default",
    action_key character(31) COLLATE pg_catalog."default",
    CONSTRAINT l4w_event_key PRIMARY KEY (event)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.usr_event
(
    "user" integer NOT NULL,
    event integer NOT NULL,
    date timestamp with time zone,
    CONSTRAINT usr_event_key PRIMARY KEY ("user", event),
    CONSTRAINT usr_event_event FOREIGN KEY (event)
        REFERENCES public.lst_event (event) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT usr_event_user FOREIGN KEY ("user")
        REFERENCES public.usr_list ("user") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

CREATE TABLE public.log_access
(
    "user" integer NOT NULL,
    first_seen timestamp with time zone,
    last_seen timestamp with time zone,
    access_counter integer,
    CONSTRAINT log_access_key PRIMARY KEY ("user"),
    CONSTRAINT log_access_user FOREIGN KEY ("user")
        REFERENCES public.usr_list ("user") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;