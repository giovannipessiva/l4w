@echo off

echo Staring migration...

set local_db=l4w
set local_user=postgres

rem This script will set 3 variables for the connection to the remote PG database:
rem - remote_host
rem - remote_db
rem - remote_user
call server\config\setRemoteConnectionConfig.bat

dropdb --host localhost --username %local_user% %local_db%

createdb --owner=%local_user% --host localhost --username postgres %local_db% 

pg_dump --no-owner --no-privileges --clean --column-inserts --disable-dollar-quoting --host %remote_host% --username %remote_user% %remote_db% | psql --host localhost --username %local_user% %local_db%

pause