import requestBodyRegisterSuccessful from '../../fixtures/register/register-successful.json';
import requestBodyRegisterUnsuccessful from '../../fixtures/register/register-unsuccessful.json';

import requestBodyUserCreate from '../../fixtures/users/user_create.json';
import requestBodyUserUpdatePut from '../../fixtures/users/user_update_put.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Register
    REGISTER_SUCCESSFUL = requestBodyRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = requestBodyRegisterUnsuccessful;

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE_PUT = requestBodyUserUpdatePut;    

}

export default new RequestBodyUtils;