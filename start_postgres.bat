@echo off

rem Force previous instances to stop:
taskkill /im postgres.exe /f

rem Start PostgreSQL server
pg_ctl -o "-p 5432" restart -w -D "C:\Program Files\PostgreSQL\9.5\data"
