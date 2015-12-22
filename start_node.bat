@rem Endless loop for easy server restart
:loop
@rem @heroku local
@node server/index.js
cls
@echo Relauching node.js...
@goto loop