import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import challengingDOMPage from "../pageobjects/challegingDOMPage";
const ChallengingDOMPage = new challengingDOMPage

Given("Eu acesso a pagina de challegingDOM", () => {
    ChallengingDOMPage.acessarChallegingDOMPage()
})

When("eu valido que acessei a pagina de challegingDOM com sucesso", () => {
    ChallengingDOMPage.validoQuePaginaChallegingDOMCarregou()
})

When("eu clico no botao generico na pagina de challegingDOM", () => {
    ChallengingDOMPage.clicoBotaoGerenicoChallegingDOMPage()
})

When("eu clico no botao alert na pagina de challegingDOM", () => {
    ChallengingDOMPage.clicoBotaoAlertChallegingDOMPage()
})

When("eu clico no botao success na pagina de challegingDOM", () => {
    ChallengingDOMPage.clicoBotaoSuccessChallegingDOMPage()
})

When("eu clico no botao edit da tabela que contem a palavra: {string} na pagina de challegingDOM", (dadoEditar) => {
    ChallengingDOMPage.clicoBotaoEditChallegingDOMPage(dadoEditar)
})

When("eu clico no botao delete da tabela que contem a palavra: {string} na pagina de challegingDOM", (dadoDeletar) => {
    ChallengingDOMPage.clicoBotaoDeleteChallegingDOMPage(dadoDeletar)
})


