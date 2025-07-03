/// <reference types="cypress"/>
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginPages/loginPage.cy.js";

Given('Un usuario ingresa a la web Calidda', () => {
  login.visit();
});

When('El usuario ingresa las credenciales administrador web',()=>{
    login.ingresarEmailPaswordAdministrador(); 
});

Then('El usuario visualiza el estado de la plataforma', () => {
    login.visualizarEstado();
});

Then('El usuario valida el mensaje de usuario o contraseña incorrecta', () =>{
    login.visualizarMsjError();
});

Then('El usuario cierra la sesion', () =>{
    login.cierreSesion();
});

//ESTAS CASUITICAS SOLO FUNCIONAN PARA CUANDO VALIDAMOS EL CATPCHA
When('El usuario ingresa las credenciales sin captcha {string} y {string}',(username, password)=>{
    login.ingresarEmailPaswordSinCatpcha(username, password); 
});

Then('El usuario valida el mensaje validar catpcha', () =>{
    login.visualizarMsjErrorCatpcha();
});