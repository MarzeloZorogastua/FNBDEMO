import BasePage from '../../../pageObjects/basePage.cy';
class LoginPage extends BasePage {
    visit(){
        super.visit('/');
    }
    ingresarEmailPaswordAdministrador(){
        this.typeText('#usuario', 'TISISTEMAS-AUTO');
        this.typeText('#password', 'Auto2025%%');
        this.clickElement('#submit');
        return this;    
    }
    visualizarEstado(){
        this.verifyElement('.round-state-color', 'be.visible');
    }
    visualizarMsjError(){
        this.verifyElement('div[role="dialog"]', 'be.visible');
    }
    cierreSesion(){
        this.clickElement('div[class="_user_icon"] a');
        this.clickElement('.text_inherit');
        this.verifyAndClick('#submit');
    }

    ingresarEmailPaswordSinCatpcha(username, password){
        this.typeText('#usuario', username);
        this.typeText('#password', password);
        this.clickElement('#submit');
    }
    visualizarMsjErrorCatpcha(){
        this.verifyAndClick('button[class="swal2-confirm swal2-styled"]');
    }
}

const login = new LoginPage();
export default login;