Feature: Validacao dos componentes e comportamentos da pagina Challenging DOM

        Background: Acessar pagina de Challenging DOM
                Given Eu acesso a pagina de challegingDOM

        Scenario: Clicar nos três botões da tela, e validar que houve alteração
                When eu valido que acessei a pagina de challegingDOM com sucesso
                And eu clico no botao generico na pagina de challegingDOM
                And eu clico no botao alert na pagina de challegingDOM
                Then eu clico no botao success na pagina de challegingDOM

        Scenario: Clicar em todos botoes edit da tabela presente na pagina  de challegingDOM
                When eu clico no botao edit da tabela que contem a palavra: "Iuvaret0" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Apeirian1" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Adipisci2" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Definiebas3" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Consequuntur4" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Phaedrum5" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Iuvaret6" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Apeirian7" na pagina de challegingDOM
                And eu clico no botao edit da tabela que contem a palavra: "Adipisci8" na pagina de challegingDOM
                Then eu clico no botao edit da tabela que contem a palavra: "Definiebas9" na pagina de challegingDOM

        Scenario: Clicar em todos botoes da delete da tabela presente na pagina  de challegingDOM
                When eu clico no botao delete da tabela que contem a palavra: "Iuvaret0" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Apeirian1" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Adipisci2" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Definiebas3" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Consequuntur4" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Phaedrum5" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Iuvaret6" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Apeirian7" na pagina de challegingDOM
                And eu clico no botao delete da tabela que contem a palavra: "Adipisci8" na pagina de challegingDOM
                Then eu clico no botao delete da tabela que contem a palavra: "Definiebas9" na pagina de challegingDOM