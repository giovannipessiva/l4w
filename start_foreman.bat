@rem Endless loop for easy server restart
:loop
@foreman start web
cls
@echo Relauching Foreman...
@goto loop