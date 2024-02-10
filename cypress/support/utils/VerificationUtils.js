/**
 * Utility functions for verifying response details using Cypress.
 * @namespace
 */
const VerificationUtils = {

    /**
     * Asserts that the response status code matches the expected status code.
     * @function
     * @param {Object} response - The Cypress response object.
     * @param {number} expectedStatusCode - The expected HTTP status code.
     * @throws Will throw an error if the assertion fails.
     */
    assertResponseStatusCode: (response, expectedStatusCode) => {
        cy.addTestContext(`Asserts that Response Status code is '${expectedStatusCode}'.`)
        expect(response.status).to.equal(expectedStatusCode);   
    },

    /**
     * Asserts that the response body contains the specified key.
     * @function
     * @param {Object} responseBody - The parsed response body.
     * @param {string} expectedKeyName - The expected key in the response body.
     * @throws Will throw an error if the assertion fails.
     */
    assertResponseBodyKeyPresent: (responseBody, expectedKeyName) => {
        cy.addTestContext(`Asserts that Response Body has property: '${expectedKeyName}'.`)
        expect(responseBody).to.have.property(expectedKeyName);
    },

    /**
     * Asserts that the response body key has the expected value.
     * @function
     * @param {Object} responseBody - The parsed response body.
     * @param {string} expectedKeyName - The expected key in the response body.
     * @param {*} expectedValue - The expected value for the specified key.
     * @throws Will throw an error if the assertion fails.
     */
    assertResponseBodyKeyValue: (responseBody, expectedKeyName, expectedValue) => {
        cy.addTestContext(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
        expect(responseBody[expectedKeyName]).to.equal(expectedValue);
    }    

};

export default VerificationUtils;