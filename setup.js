#! /usr/bin/env node

const { execSync } = require("child_process");

console.log("===Inicializando Projeto===");

execSync(`npm init -y`, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});

console.log("===Instalando dependências===");

execSync(
  `npm install express express-async-errors cors dotenv @prisma/client`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.stack}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
  }
);

console.log("===Instalando dependências de desenvolvimento===");

execSync(
  `npm install typescript ts-node nodemon prisma eslint prettier jest ts-jest eslint-config-airbnb-base eslint-config-airbnb-typescript 
    eslint-plugin-import eslint-plugin-prettier @types/cors @types/express @types/node @typescript-eslint/eslint-plugin 
    @typescript-eslint/parser @types/jest -D`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
  }
);

console.log("===Apagando setup===");

execSync("rm setup.js && rm README.md", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});

console.log("===Inicializando Prisma===");

execSync("npx prisma init", (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
  }
});

console.log("===Tudo Pronto===");
