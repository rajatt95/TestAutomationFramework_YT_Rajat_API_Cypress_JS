import EndpointUtils from '../../support/utils/EndpointUtils';
import RequestBodyUtils from '../../support/utils/RequestBodyUtils';
import RequestUtils from '../../support/utils/RequestUtils';
import ResponseUtils from '../../support/utils/ResponseUtils';
import VerificationUtils from '../../support/utils/VerificationUtils';
import SchemaUtils from '../../support/utils/SchemaUtils';

/**
 * Test suite for API endpoints related to user login.
 */

describe('Login', () => {
  
    // Define endpoints for login
    const loginEndpoint = EndpointUtils.LOGIN;

    /**
     * Test case for making a POST request to login successfully.
     * @tags {regression, sanity}
     */
    it('POST Request - Login Successful. @regression @sanity', () => {
        
        // Make a request to the API endpoint
        RequestUtils.post(loginEndpoint, RequestBodyUtils.LOGIN_SUCCESSFUL).then((response) => {

            // Parse and Log Response Body   
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200)
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, "token") 
            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.LOGIN_SUCCESSFUL)        
            
        });
    });

    /**
     * Test case for making a POST request to login unsuccessfully.
     * @regression
     */
    it('POST Request - Login Unsuccessful. @regression', () => {
        
        // Make a request to the API endpoint
        RequestUtils.post(loginEndpoint, RequestBodyUtils.LOGIN_UNSUCCESSFUL).then((response) => {

            // Parse and Log Response Body   
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 400)
            VerificationUtils.assertResponseBodyKeyValue(responseBody, "error", "Missing password")
                    
        });
    });



})