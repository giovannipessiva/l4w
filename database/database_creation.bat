@echo off
setlocal

:PROMPT
SET /P AREYOUSURE=This will destroy local database. Are you sure?  (Y/N)
IF /I "%AREYOUSURE%" NEQ "Y" GOTO END


rem This script will set variables for the connection to the local PG database:
call .\setLocalConnectionConfig.bat

rem Stop the server and delete the folder
taskkill /im postgres.exe /f /t
rmdir /s /q "..\%local_data%"

rem Initialize the database cluster
pg_ctl -D "..\%local_data%" initdb -o "--encoding UTF8 --locale en"

rem Start the server
pg_ctl -o "-p %local_port%" start -w -D "..\%local_data%"

rem Create the database
createdb --host %local_host% --port %local_port% --encoding UTF8 --locale en %local_db%

rem Create a new user and make it owner of the database with all privileges
psql -p %local_port% -d %local_db% -c "CREATE USER %local_user% WITH PASSWORD '%local_password%' CREATEDB;"
psql -p %local_port% -d %local_db% -c "ALTER DATABASE %local_db% OWNER TO %local_user%;"

rem Start the copy from Production
call .\database_migration.bat


:END
endlocal