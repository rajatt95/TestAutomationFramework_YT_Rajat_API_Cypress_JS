// RequestUtils.js

const RequestUtils = {
  sendRequest: (method, endpoint, body = null) => {
    return cy.request({
      method,
      url: endpoint,
      body,
      failOnStatusCode: false, // Set the option to ignore status code failures
    });
  },

  get: (endpoint) => {
    return RequestUtils.sendRequest('GET', endpoint);
  },

  post: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('POST', endpoint, requestBody);
  },

  put: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('PUT', endpoint, requestBody);
  },

  delete: (endpoint) => {
    return RequestUtils.sendRequest('DELETE', endpoint);
  },

  patch: (endpoint, requestBody) => {
    return RequestUtils.sendRequest('PATCH', endpoint, requestBody);
  },

};

export default RequestUtils;