describe('Users', () => {

    it('GET Request - Get User Details. @regression', () => {
        cy.request({
            // Make a request to the API endpoint
            method: 'GET',
            url: `users/2`,    
            
        }).then((response) => {

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
        cy.request({
            // Make a request to the API endpoint
            method: 'POST',
            url: `user`,  
            body: {    
                id: 1111,
            },  
        }).then((response) => {

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
        cy.request({
            // Make a request to the API endpoint
            method: 'PUT',
            url: `users/2`,  
            body: {    
                name: 'test name - updated',
                job: 'test job - updated',
            },  
        }).then((response) => {

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
        cy.request({
            // Make a request to the API endpoint
            method: 'DELETE',
            url: `users/2`,    
            
        }).then((response) => {

            // Parse and Log Response Body    
            console.log(response.body)
            cy.log(response.body)

            // Assertions to validate the response
            expect(response.status).to.equal(204); 
        });
    });

})