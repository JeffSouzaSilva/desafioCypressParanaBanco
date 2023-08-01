import challegingDOMElements from "../elements/challegingDOMElements";
const ChallegingDOMElements = new challegingDOMElements

class challengingDOMPage {


    acessarChallegingDOMPage() {
        cy.visit('/challenging_dom')
    }

    validoQuePaginaChallegingDOMCarregou() {
        cy.get(ChallegingDOMElements.tituloChallegingDOMPage("Challenging DOM"))
            .should('be.visible')
    }

    clicoBotaoGerenicoChallegingDOMPage() {
        cy.get(ChallegingDOMElements.botaoGenericoChallegingDOMPage())
            .then(($btn) => {
                const textoBotaoGenericoAntesClique = $btn.text()
                cy.log(textoBotaoGenericoAntesClique)
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoGenericoChallegingDOMPage())
                    .click()
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoGenericoChallegingDOMPage())
                    .then(($btn2) => {
                        const textoBotaoGenericoDepoisClique = $btn2.text()
                        cy.log(textoBotaoGenericoDepoisClique)
                        if (textoBotaoGenericoAntesClique == textoBotaoGenericoDepoisClique) {
                            throw new Error('Erro ao tentar validar textos botao generico')
                        }
                    })
            })
    }


    clicoBotaoAlertChallegingDOMPage() {
        cy.get(ChallegingDOMElements.botaoAlertChallegingDOMPage())
            .then(($btn) => {
                const textoBotaoAlertcoAntesClique = $btn.text()
                cy.log(textoBotaoAlertcoAntesClique)
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoAlertChallegingDOMPage())
                    .click()
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoAlertChallegingDOMPage())
                    .then(($btn2) => {
                        const textoBotaoAlertoDepoisClique = $btn2.text()
                        cy.log(textoBotaoAlertoDepoisClique)
                        if (textoBotaoAlertcoAntesClique == textoBotaoAlertoDepoisClique) {
                            throw new Error('Erro ao tentar validar textos botao alert')
                        }
                    })
            })
    }


    clicoBotaoSuccessChallegingDOMPage() {
        cy.get(ChallegingDOMElements.botaoSuccessChallegingDOMPage())
            .then(($btn) => {
                const textoBotaoSucesscoAntesClique = $btn.text()
                cy.log(textoBotaoSucesscoAntesClique)
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoSuccessChallegingDOMPage(), )
                    .click()
                cy.wait(5000)
                cy.get(ChallegingDOMElements.botaoSuccessChallegingDOMPage())
                    .then(($btn2) => {
                        const textoBotaoSuccessDepoisClique = $btn2.text()
                        cy.log(textoBotaoSuccessDepoisClique)
                        if (textoBotaoSucesscoAntesClique == textoBotaoSuccessDepoisClique) {
                            throw new Error('Erro ao tentar validar textos botao success')
                        }
                    })
            })
    }


    clicoBotaoEditChallegingDOMPage(dadoEditar) {
        cy.get(ChallegingDOMElements.botaoSuccessChallegingDOMPage())
            .click()
        cy.get(ChallegingDOMElements.colunaLoremTabelaChallegingDOMPage())
            .contains(dadoEditar)
            .parent()
            .within(() => {
                return cy.get(ChallegingDOMElements.botaoEditTabelaChallegingDOMPage())
                    .click()
            })
        cy.url()
            .should('include', '#edit')
    }

    clicoBotaoDeleteChallegingDOMPage(dadoDeletar) {
        cy.get(ChallegingDOMElements.botaoSuccessChallegingDOMPage())
            .click()
        cy.get(ChallegingDOMElements.colunaLoremTabelaChallegingDOMPage())
            .contains(dadoDeletar)
            .parent()
            .within(() => {
                return cy.get(ChallegingDOMElements.botaoDeleteTabelaChallegingDOMPage())
                    .click()
            })
        cy.url()
            .should('include', '#delete')
    }

}

export default challengingDOMPage;