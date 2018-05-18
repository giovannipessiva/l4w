@echo off

echo Starting migration from Production to localhost...

rem This script will set variables for the connection to the remote PG database:
call .\setRemoteConnectionConfig.bat

rem This script will set variables for the connection to the local PG database:
call .\setLocalConnectionConfig.bat

dropdb --host %local_host% --port %local_port% --username %local_user% %local_db%

createdb --owner %local_user% --host %local_host% --port %local_port% --username %local_user% %local_db% 

pg_dump --no-owner --no-privileges --clean --column-inserts --disable-dollar-quoting --host %remote_host% --username %remote_user% %remote_db% | psql --host %local_host% --port %local_port% --username %local_user% %local_db%

pause