@echo off

rem Force previous instances to stop
taskkill /im postgres.exe /f /t

rem This script will set variables for the connection to the local PG database:
call .\data\database\setLocalConnectionConfig.bat

rem Start PostgreSQL server
pg_ctl -o "-p %local_port%" restart -w -D "%local_data%"
pause