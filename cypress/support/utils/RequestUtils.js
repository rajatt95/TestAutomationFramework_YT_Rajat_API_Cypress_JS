/**
 * Utility functions for making HTTP requests using Cypress and logging request and response details.
 * @namespace
 */
const RequestUtils = {

  /**
   * Sends an HTTP request with the specified method, endpoint, and optional body.
   * @param {string} method - The HTTP request method (GET, POST, PUT, DELETE, PATCH).
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {Object} [body=null] - The body of the HTTP request (optional).
   * @returns {Object} - The Cypress request object.
   */
  sendRequest: (method, endpoint, body = null) => {
    return cy.request({
      method,
      url: endpoint,
      body,
      failOnStatusCode: false, // Set the option to ignore status code failures
    });
  },

  /**
   * Sends a GET request and returns the response.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @returns {Object} - The Cypress request object.
   */
  get: (endpoint) => {
    return RequestUtils.sendRequest('GET', endpoint);
  },

  /**
   * Sends a POST request and returns the response.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {Object} requestBody - The body of the HTTP request.
   * @returns {Object} - The Cypress request object.
   */
  post: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('POST', endpoint, requestBody);
  },

  /**
   * Sends a PUT request and returns the response.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {Object} requestBody - The body of the HTTP request.
   * @returns {Object} - The Cypress request object.
   */
  put: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('PUT', endpoint, requestBody);
  },

  /**
   * Sends a DELETE request and returns the response.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @returns {Object} - The Cypress request object.
   */
  delete: (endpoint) => {
    return RequestUtils.sendRequest('DELETE', endpoint);
  },

  /**
   * Sends a PATCH request and returns the response.
   * @param {string} endpoint - The endpoint or URL for the request.
   * @param {Object} requestBody - The body of the HTTP request.
   * @returns {Object} - The Cypress request object.
   */
  patch: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('PATCH', endpoint, requestBody);
  },

};

export default RequestUtils;