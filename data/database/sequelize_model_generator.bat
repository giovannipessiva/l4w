@echo off
rem Some packages needs to be installed:
rem $ npm install -g pg@6.4.2	// see: https://github.com/sequelize/sequelize-auto/issues/184
rem $ npm install -g sequelize-auto

rem This script will set 5 variables for the connection to the local PG database:
rem - local_host
rem - local_port
rem - local_db
rem - local_data
rem - local_user
rem - local_password
call setLocalConnectionConfig.bat

rem The database tables must grant privileges to the user

sequelize-auto --host %local_host% --database %local_db% --user %local_user% --pass %local_password% --port %local_port% --dialect postgres --output "../../src/server/models"

pause