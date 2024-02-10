const VerificationUtils = {

    assertResponseStatusCode: (response, expectedStatusCode) => {
        cy.addTestContext(`Asserts that Response Status code is '${expectedStatusCode}'.`)
        expect(response.status).to.equal(expectedStatusCode);   
    },

    assertResponseBodyKeyPresent: (responseBody, expectedKeyName) => {
        cy.addTestContext(`Asserts that Response Body has property: '${expectedKeyName}'.`)
        expect(responseBody).to.have.property(expectedKeyName);
    },
            
    assertResponseBodyKeyValue: (responseBody, expectedKeyName, expectedValue) => {
        cy.addTestContext(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
        expect(responseBody[expectedKeyName]).to.equal(expectedValue);
    }    

};

export default VerificationUtils;