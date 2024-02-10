import EndpointUtils from '../../support/utils/EndpointUtils';
import RequestBodyUtils from '../../support/utils/RequestBodyUtils';
import RequestUtils from '../../support/utils/RequestUtils';

describe('Users', () => {

    // Define endpoints for users
    const singleUserEndpoint = EndpointUtils.SINGLE_USER;
    const userEndpoint = EndpointUtils.USER;

    it('GET Request - Get User Details. @regression', () => {
        RequestUtils.get(singleUserEndpoint).then((response) => {  

            // Parse and Log Response Body    
            console.log(response.body)
            cy.log(response.body)

            // Assertions to validate the response
            expect(response.status).to.equal(200);        
            expect(response.body.data.first_name).to.equal('Janet');
            expect(response.body.data.last_name).to.equal('Weaver');
            expect(response.body.data).to.have.property('email');
        });
    });

    it('POST Request - Create New User. @regression @sanity', () => {
        RequestUtils.post(userEndpoint, RequestBodyUtils.USER_CREATE).then((response) => {

            // Parse and Log Response Body    
            console.log(response.body)
            cy.log(response.body)

            // Assertions to validate the response
            expect(response.status).to.equal(201);        
            expect(response.body.id).to.equal(1111);
            expect(response.body).to.have.property('createdAt');
        });
    });

    it('PUT Request - Update User. @regression @sanity', () => {
        RequestUtils.put(singleUserEndpoint, RequestBodyUtils.USER_UPDATE_PUT).then((response) => {
            
            // Parse and Log Response Body    
            console.log(response.body)
            cy.log(response.body)

            // Assertions to validate the response
            expect(response.status).to.equal(200);        
            expect(response.body.name).to.equal('test name - updated');
            expect(response.body.job).to.equal('test job - updated');
            expect(response.body).to.have.property('updatedAt');
        
        });
    });

    it('DELETE Request - Delete User. @regression', () => {
        RequestUtils.delete(singleUserEndpoint).then((response) => {
            
            // Parse and Log Response Body    
            console.log(response.body)
            cy.log(response.body)

            // Assertions to validate the response
            expect(response.status).to.equal(204); 
        });
    });

})