@echo off
:loop

rem Run as Heroku local application (will use .env file)
call heroku local -f Procfile_inspect

echo Restarting...
goto loop
