class Utils {
    static async request(method, path, body) {
        
        const url = `https://jsonplaceholder.typicode.com${path}`
        const options = {
            method,
            url: url,
            headers: {

            }
        };

        if (body) {
            options.body = body;
        }

        return cy.request(options).as('response');


    }

}

export default Utils;