@echo off
:loop

rem Run as Heroku local application (will use .env file)
rem It require the "heroku" module to be globally installed (npm install -g heroku)
call heroku local -f Procfile_inspect

echo Restarting...
goto loop
