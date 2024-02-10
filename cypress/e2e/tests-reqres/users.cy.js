import EndpointUtils from '../../support/utils/EndpointUtils';
import RequestBodyUtils from '../../support/utils/RequestBodyUtils';
import RequestUtils from '../../support/utils/RequestUtils';
import ResponseUtils from '../../support/utils/ResponseUtils';
import VerificationUtils from '../../support/utils/VerificationUtils';

/**
 * Test suite for API endpoints related to user management.
 */
describe('Users', () => {

    // Define endpoints for users
    const singleUserEndpoint = EndpointUtils.SINGLE_USER;
    const userEndpoint = EndpointUtils.USER;

    /**
     * Test case for making a GET request to retrieve user details.
     * @tags {regression}
     */
    it('GET Request - Get User Details. @regression', () => {

        // Make a request to the API endpoint
        RequestUtils.get(singleUserEndpoint).then((response) => {  

            // Parse and Log Response Body    
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200)
            VerificationUtils.assertResponseBodyKeyValue(responseBody.data, 'first_name', 'Janet')
            VerificationUtils.assertResponseBodyKeyValue(responseBody.data, 'last_name', 'Weaver')
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data, 'email')
        });
    });

    /**
     * Test case for making a POST request to create a new user.
     * @tags {regression, sanity}
     */
    it('POST Request - Create New User. @regression @sanity', () => {

        // Make a request to the API endpoint
        RequestUtils.post(userEndpoint, RequestBodyUtils.USER_CREATE).then((response) => {

            // Parse and Log Response Body    
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 201)
            VerificationUtils.assertResponseBodyKeyValue(responseBody, 'id', 1111)
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'createdAt')
        });
    });

    /**
     * Test case for making a PUT request to update a user.
     * @tags {regression, sanity}
     */
    it('PUT Request - Update User. @regression @sanity', () => {

        // Make a request to the API endpoint
        RequestUtils.put(singleUserEndpoint, RequestBodyUtils.USER_UPDATE_PUT).then((response) => {
            
            // Parse and Log Response Body    
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200)   
            VerificationUtils.assertResponseBodyKeyValue(responseBody, 'name', 'test name - updated')
            VerificationUtils.assertResponseBodyKeyValue(responseBody, 'job', 'test job - updated')
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'updatedAt');
        
        });
    });

    /**
     * Test case for making a DELETE request to delete a user.
     * @tags {regression}
     */
    it('DELETE Request - Delete User. @regression', () => {
        
        // Make a request to the API endpoint
        RequestUtils.delete(singleUserEndpoint).then((response) => {

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 204)
        });
    });

})