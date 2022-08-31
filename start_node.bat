@echo off
:loop

call npm run start-dev

echo Restarting...
goto loop
