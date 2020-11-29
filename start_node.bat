@echo off
:loop

rem Run as Heroku local application (will use .env file)
call npm start

echo Restarting...
goto loop
