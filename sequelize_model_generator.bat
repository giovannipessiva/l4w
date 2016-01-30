@echo off
rem The package sequelize-auto needs to be installed:
rem $ npm install -g sequelize-auto

rem The database tables must grant privileges to the user

sequelize-auto -h localhost -d l4w -u l4w -x l4w -p 5432 -e postgres -o "./server/modules/model"
