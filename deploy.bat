@echo off
echo Fazendo deploy do site institucional...
netlify deploy --prod --dir=.
echo Deploy concluido!
pause