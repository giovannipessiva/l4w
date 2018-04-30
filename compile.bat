@echo off

rem Show tsc version
echo TypeScript compiler version:
call tsc --version

rem Compile client and server
echo Compiling L4W client...
call tsc --project client
echo Compiling L4W server...
call tsc --project server
echo Done!