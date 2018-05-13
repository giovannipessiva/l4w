@echo off
rem The package sequelize-auto needs to be installed:
rem $ npm install -g sequelize-auto

rem The database tables must grant privileges to the user

sequelize-auto --host localhost --database l4w --user postgres --pass postgres --port 5432 --dialect postgres --output "./server/src/models"

pause