@echo off
rem Start PostgreSQL server
pg_ctl -o "-p 5432" restart -w -D "C:\Program Files\PostgreSQL\9.5\data"
