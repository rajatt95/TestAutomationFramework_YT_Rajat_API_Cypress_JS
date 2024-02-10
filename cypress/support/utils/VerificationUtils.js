const VerificationUtils = {

    assertResponseStatusCode: (response, expectedStatusCode) => {
        console.log(`Asserts that Response Status code is '${expectedStatusCode}'.`)
        expect(response.status).to.equal(expectedStatusCode);   
    },

    assertResponseBodyKeyPresent: (responseBody, expectedKeyName) => {
        console.log(`Asserts that Response Body has property: '${expectedKeyName}'.`)
        expect(responseBody).to.have.property(expectedKeyName);
    },
            
    assertResponseBodyKeyValue: (responseBody, expectedKeyName, expectedValue) => {
        console.log(`Asserts that Response Body has key: '${expectedKeyName}' with value: '${expectedValue}'.`);
        expect(responseBody[expectedKeyName]).to.equal(expectedValue);
    }    

};

export default VerificationUtils;