const ResponseUtils = {

  parseAndLogResponseBody: (response) => {
    try {
      const responseBody = response.body;
      console.log(responseBody);
      cy.log(responseBody);
      return responseBody;
    } catch (error) {
      console.error('Error parsing and logging response body:', error.message);
      throw error;
    }
  },

};

export default ResponseUtils;