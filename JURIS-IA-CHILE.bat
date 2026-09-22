@echo off
title Juris IA Chile
cd /d "%~dp0"

REM Lanzador de Juris IA Chile.
REM 1) Si el servidor ya esta corriendo, solo abre el navegador.
REM 2) Si no, lo inicia (ventana minimizada), espera a que responda y abre el navegador.

call :revisar
if "%listo%"=="1" goto abrir

echo.
echo   Iniciando Juris IA Chile...
echo   (esto puede demorar unos segundos la primera vez)
echo.

start "Juris IA Chile - servidor" /min cmd /k "npm start"

set intentos=0
:esperar
timeout /t 1 /nobreak >nul
call :revisar
if "%listo%"=="1" goto abrir
set /a intentos+=1
if %intentos% lss 40 goto esperar

echo.
echo   No se pudo iniciar el servidor.
echo   Revisa la ventana minimizada "Juris IA Chile - servidor" para ver el error.
echo.
pause
exit /b 1

:abrir
start "" http://localhost:3000
exit /b 0

:revisar
set listo=0
powershell -NoProfile -Command "try { $null = Invoke-WebRequest -UseBasicParsing -Uri 'http://localhost:3000' -TimeoutSec 2; exit 0 } catch { exit 1 }" >nul 2>&1
if %errorlevel%==0 set listo=1
goto :eof
