@echo off
title Pushing Portfolio to GitHub
color 0b
echo ========================================================
echo   PUSHING PORTFOLIO TO GITHUB: Mouleeshwaranv/New_Portfolio-
echo ========================================================
echo.
cd /d "%~dp0"

echo Current Git status:
git status
echo.
echo Attempting git push...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! All files pushed to GitHub successfully!
    echo   You can now return to Vercel and click 'Deploy'.
    echo ========================================================
) else (
    echo.
    echo ========================================================
    echo   Push encountered an error or needs authentication.
    echo ========================================================
)
echo.
pause
