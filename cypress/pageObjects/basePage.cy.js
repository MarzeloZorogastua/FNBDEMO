class BasePage {
    visit(url){
        cy.visit(url)
    }
    getElement (selector){
        return cy.get(selector)
    }
    clickElement (selector){
        this.getElement(selector).click()
    }
    clearText (selector){
        this.getElement(selector).clear({ force: true })
    }
    typeText (selector, text){   
        this.clearText(selector)
        this.getElement(selector).type(text)
    }
    pressEnter(selector) {
        this.getElement(selector).type('{enter}')
    }
    verifyElement (selector, ...arg){
        this.getElement(selector).should(...arg)
    }
    verifyAndClick (selector){
        this.getElement(selector).should('be.visible').click()
    }
    verifyCompareAndCick(selector,opcion){
        this.getElement(selector).contains(selector,opcion).click()
    }
    attachFile (selector, fileName){
        this.getElement(selector).attachFile(fileName)
    }

    getText(selector, texto ){
        this.getElement(selector).invoke('text').then((text) => {
            expect(text.trim()).to.equal(texto)
        });
    }

    clickWithTwoElement(e1, e2, text) {
        this.getElement(e1).contains(e2,text).parents(e1).click({ force: true })
    }

    clickSelect(e1, e2) {
        this.getElement(e1).then(($tr) => {
            if ($tr.find(e2).length > 0) {
                this.getElement(e2).eq(0).click()
            } else { 
                cy.log(`El elemento ${e1} no fue encontrado.`)
            }
        });
    }

    activateCheckboxIfNotChecked(selector) {
        this.getElement(selector).each(($el) => {
            const isChecked = Cypress.$($el).prop('checked')
            if (!isChecked) {
                cy.wrap($el).click({ force: true })
                cy.log('Checkbox desactivado → activado.')
                return false; // rompe el each después de activar uno
            }
        }).then(() => {
            cy.log('Revisión completa de checkboxes.')
        }); 
    }

    deactivateCheckboxIfChecked(selector) {
        this.getElement(selector).each(($el) => {
            const isChecked = Cypress.$($el).prop('checked')
            if (isChecked) {
                cy.wrap($el).click({ force: true });
                cy.log('Checkbox activado → desactivado.')
                return false; // rompe el each después de desactivar uno
            }
        }).then(() => {
            cy.log('Revisión completa de checkboxes.')
        });
    }

    compareText(selector, expectedText) {
        this.getElement(selector).invoke('text').then((actualText) => {
            const trimmedText = actualText.trim()
            if (trimmedText !== expectedText) {
                throw new Error(`Texto no coincide: se esperaba "${expectedText}", pero se obtuvo "${trimmedText}"`)
            }
            expect(trimmedText).to.eq(expectedText)
        });
    }

    changeValInput(selector, valor){
        this.getElement(selector).invoke('val', valor).trigger('input');
    }
}

export default BasePage;