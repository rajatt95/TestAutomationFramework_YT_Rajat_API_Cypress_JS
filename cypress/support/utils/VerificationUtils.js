
import Ajv from 'ajv';

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
    },    
    
    /**
     * Asserts that the response body matches the specified JSON schema.
     * @function
     * @param {Object} responseBody - The parsed response body.
     * @param {Object} schema - The JSON schema object to validate against.
     * @throws Will throw an error if the validation fails.
     */
    assertResponseSchema: (responseBody, schema) => {
        cy.addTestContext(`Asserts that Response Body matches the provided JSON schema.`);

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const isValid = validate(responseBody);

        if (!isValid) {
            const errorMessages = validate.errors.map(err => `${err.instancePath} ${err.message}`).join(', ');
            throw new Error(`Schema validation failed: ${errorMessages}`);
        }

        expect(isValid).to.be.true;
    },


};

export default VerificationUtils;