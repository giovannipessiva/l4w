@echo off
rem Start PostgreSQL server
pg_ctl -o "-p 5433" start -w -D "C:\Program Files\PostgreSQL\9.4\data"

rem Run as Heroku local application (will use .env file)
heroku local

rem Run as Node.js application
rem node server/index.js