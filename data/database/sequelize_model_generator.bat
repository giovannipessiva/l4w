@echo off
rem Some packages needs to be installed/updated:
call npm install -g pg
call npm install -g sequelize
call npm install -g sequelize-auto

rem This script will set 5 variables for the connection to the local PG database:
rem - local_host
rem - local_port
rem - local_db
rem - local_data
rem - local_user
rem - local_password
call setLocalConnectionConfig.bat

rem Using lang "esm" instead of "ts", because generate ts files have compilation issues

sequelize-auto --lang esm --host %local_host% --database %local_db% --user %local_user% --pass %local_password% --port %local_port% --dialect postgres --output "../../src/server/models"

pause