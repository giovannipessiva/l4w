@rem Endless loop for easy server restart
:loop
@node server/index.js
cls
@echo Relauching node.js...
@goto loop