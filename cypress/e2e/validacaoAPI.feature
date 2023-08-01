Feature: Validacao das operacoes do endpoint http://jsonplaceholder.typicode.com/users


        Scenario: Validacao da execucao das quatro operacoes, juntamente das validacao do status code e schema
                When eu valido a execucao da operacao GET para buscar uma lista usuarios
                And eu valido a execucao da operacao PUT para atualizar um usuario
                And eu valido a execucao da operacao POST para criar um usuario
                Then eu valido a execucao da operacao DELETE para deletar um usuario