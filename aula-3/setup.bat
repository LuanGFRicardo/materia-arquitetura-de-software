@echo off

:: Executar os comandos sempre que o arquivo for executado
Set-ExecutionPolicy Unrestricted -Scope CurrentUser

npm init -y
npm install nodemon
npm install express
npm install mongoose
npm install dotenv
npm run dev