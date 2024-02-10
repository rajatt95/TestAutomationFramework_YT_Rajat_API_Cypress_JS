/**
 * Utility functions for parsing and logging response body using Cypress.
 * @namespace
 */
const ResponseUtils = {

  /**
   * Parses and logs the response body.
   * @function
   * @param {Object} response - The Cypress response object.
   * @returns {Object} - The parsed response body.
   * @throws Will throw an error if there is an issue parsing or logging the response body.
   */
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