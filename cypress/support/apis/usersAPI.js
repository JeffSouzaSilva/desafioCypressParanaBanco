import Utils from '../apis/utils'

import * as putSchema from '../../fixtures/putSchema.json';
import * as getSchema from '../../fixtures/getSchema.json';
import * as postSchema from '../../fixtures/postSchema.json';
import * as deleteSchema from '../../fixtures/deleteSchema.json';


Cypress.Commands.add('postUsers', () => {
    cy.fixture('../fixtures/usersPost').then((body) => {
      let username = Date.now()
      body.username = username;
        Utils.request('POST', '/users', body)
    })
    cy.get('@response').then((response) => {
        const statusCode = response.status
        const id = response.body.id

        expect(response.body).to.be.jsonSchema(postSchema)

        if (statusCode != '201') {
            throw new Error('Houve um erro na chamada')
        }

    })
})


Cypress.Commands.add('getUsers', () => {
    Utils.request('GET', '/users')
    cy.get('@response').then((response) => {
        const statusCode = response.status

        expect(response.body).to.be.jsonSchema(getSchema)

        if (statusCode != '200') {
            throw new Error('Houve um erro na chamada')
        }
    })

})

Cypress.Commands.add('deleteUsers', () => {
    Utils.request('DELETE', '/users/2')
    cy.get('@response').then((response) => {
        const statusCode = response.status
     
        expect(response.body).to.be.jsonSchema(deleteSchema)

        if (statusCode != '200') {
            throw new Error('Houve um erro na chamada')
        }
    })

})

Cypress.Commands.add('putUsers', () => {
    cy.fixture('../fixtures/usersPut').then((body) => {
        let username = Date.now()
        body.username = username;
        Utils.request('PUT', '/users/2', body)
    })

    cy.get('@response').then((response) => {
        const statusCode = response.status

       expect(response.body).to.be.jsonSchema(putSchema)
            
        if (statusCode != '200') {
            throw new Error('Houve um erro na chamada')
        }
    })

})