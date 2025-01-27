import EndpointUtils from '../../support/utils/EndpointUtils';
import RequestBodyUtils from '../../support/utils/RequestBodyUtils';
import RequestUtils from '../../support/utils/RequestUtils';
import ResponseUtils from '../../support/utils/ResponseUtils';
import VerificationUtils from '../../support/utils/VerificationUtils';
import SchemaUtils from '../../support/utils/SchemaUtils';

/**
 * Test suite for API endpoints related to user management.
 */
describe('Users', () => {

    // Define endpoints for users
    const singleUserEndpoint = EndpointUtils.SINGLE_USER;
    const userEndpoint = EndpointUtils.USER;
    const singleUserNotFoundEndpoint = EndpointUtils.SINGLE_USER_NOT_FOUND;
    const listUsersEndpoint = EndpointUtils.LIST_USERS;

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

            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.USER_CREATE)
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

            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.USER_UPDATE_PUT)
        
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

    /**
     * Test case for making a GET request when a single user is not found.
     * @tags {regression}
     */
    it('GET Request - SINGLE USER NOT FOUND. @regression', () => {
        
        RequestUtils.get(singleUserNotFoundEndpoint).then((response) => {

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 404)
        
        });
    });


    /**
     * Test case for making a GET request to list users.
     * @tags {regression}
     */
    it('GET Request - LIST USERS. @regression', () => {
        
        RequestUtils.get(listUsersEndpoint).then((response) => {

            // Parse and Log Response Body    
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);
        
            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200) 
            VerificationUtils.assertResponseBodyKeyValue(responseBody, 'page', 2);

            // Data Array > 1st Object must have all below properties
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data[0], 'id');
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data[0], 'email');
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data[0], 'first_name');
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data[0], 'last_name');
            VerificationUtils.assertResponseBodyKeyPresent(responseBody.data[0], 'avatar');
            
            // VerificationUtils.assertResponseBodyKeyValue(responseBody.support, 'text', 'To keep ReqRes free, contributions towards server costs are appreciated!');
            VerificationUtils.assertResponseBodyKeyValue(responseBody.support, 'text', 'Tired of writing endless social media content? Let Content Caddy generate it for you.');
                        
        });
    });

    /**
     * Test case for making a PATCH request to update a user.
     * @tags {regression, sanity}
     */
    it('PATCH Request - Update User. @regression @sanity', () => {
    
        RequestUtils.patch(singleUserEndpoint, RequestBodyUtils.USER_UPDATE_PATCH).then((response) => {

            // Parse and Log Response Body    
            const responseBody = ResponseUtils.parseAndLogResponseBody(response);

            // Assertions to validate the response
            VerificationUtils.assertResponseStatusCode(response, 200);
            VerificationUtils.assertResponseBodyKeyValue(responseBody, 'name', 'test name - updated using patch');
            VerificationUtils.assertResponseBodyKeyPresent(responseBody, 'updatedAt');

            VerificationUtils.assertResponseSchema(responseBody, SchemaUtils.USER_UPDATE_PATCH)

        });
    });

})