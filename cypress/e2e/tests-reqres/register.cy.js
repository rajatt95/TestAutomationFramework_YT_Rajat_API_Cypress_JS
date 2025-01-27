import EndpointUtils from '../../support/utils/EndpointUtils';
import RequestBodyUtils from '../../support/utils/RequestBodyUtils';
import RequestUtils from '../../support/utils/RequestUtils';
import ResponseUtils from '../../support/utils/ResponseUtils';
import VerificationUtils from '../../support/utils/VerificationUtils';
import SchemaUtils from '../../support/utils/SchemaUtils';

/**
 * Test suite for API endpoints related to user registration.
 */
describe('Register', () => {

    // Define endpoints for register
    const registerEndpoint = EndpointUtils.REGISTER;

    /**
     * Test case for making a POST request to register successfully.
     * @tags {regression}
     */
    it('POST Request - Register Successful. @regression', () => {
        
        // Make a request to the API endpoint
        RequestUtils.post(registerEndpoint, RequestBodyUtils.REGISTER_SUCCESSFUL).then((response) => {

            // Parse and Log Response Body   
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200)
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'id')
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, "token")   
            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.REGISTER_SUCCESSFUL)     
            
        });
    });

    /**
     * Test case for making a POST request to register unsuccessfully.
     * @tags {regression}
     */
    it('POST Request - Register Unsuccessful. @regression', () => {
        
        // Make a request to the API endpoint
        RequestUtils.post(registerEndpoint, RequestBodyUtils.REGISTER_UNSUCCESSFUL).then((response) => {

            // Parse and Log Response Body   
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 400)
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, "error")
            VerificationUtils.assertResponseBodyKeyValue(responseBody, "error", "Missing password")
            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.REGISTER_UNSUCCESSFUL)
                    
        });
    });

})