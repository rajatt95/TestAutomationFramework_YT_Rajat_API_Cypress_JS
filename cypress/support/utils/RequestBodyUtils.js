import requestBodyRegisterSuccessful from '../../fixtures/request-body/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../../fixtures/request-body/register/register-unsuccessful.json';

import requestBodyLoginSuccessful from '../../fixtures/request-body/login/login-successful.json';
import requestBodyLoginUnsuccessful from '../../fixtures/request-body/login/login-unsuccessful.json';

import requestBodyUserCreate from '../../fixtures/request-body/users/user_create.json';
import requestBodyUserUpdatePut from '../../fixtures/request-body/users/user_update_put.json';
import requestBodyUserUpdatePatch from '../../fixtures/request-body/users/user_update_patch.json';
/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;

    // Login
    LOGIN_SUCCESSFUL = requestBodyLoginSuccessful;
    LOGIN_UNSUCCESSFUL = requestBodyLoginUnsuccessful;

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE_PUT = requestBodyUserUpdatePut;    
    USER_UPDATE_PATCH = requestBodyUserUpdatePatch;
    

}

export default new RequestBodyUtils;