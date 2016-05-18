@echo off
:loop

rem Run as Heroku local application (will use .env file)
call heroku local

echo Restarting...
goto loop
