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


rem If this error is raised: "File C:\Users\<user>\AppData\Roaming\npm\sequelize-auto.ps1 cannot be loaded because running scripts is disabled on this system"
rem Check this out: 

rem Cannot use --lang=ts, since it seems like the generated modules are not compatible with updated versions of sequelize (they have compilation errors)
sequelize-auto --lang=esm --host %local_host% --database %local_db% --user %local_user% --pass %local_password% --port %local_port% --dialect postgres --output "../../src/server/models"

pause