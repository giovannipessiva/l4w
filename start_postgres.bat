@echo off

rem Force previous instances to stop
rem taskkill /im postgres.exe /f /t

rem This script will set variables for the connection to the local PG database:
call .\database\setLocalConnectionConfig.bat

rem Start PostgreSQL server
pg_ctl -o "-p %local_port%" restart -w -D "%local_data%"