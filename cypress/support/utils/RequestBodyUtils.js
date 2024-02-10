import requestBodyUserCreate from '../../fixtures/users/user_create.json';
import requestBodyUserUpdatePut from '../../fixtures/users/user_update_put.json';

/**
 * Utility class for managing and providing request body data for various scenarios.
 */
class RequestBodyUtils {

    // Users
    USER_CREATE = requestBodyUserCreate;
    USER_UPDATE_PUT = requestBodyUserUpdatePut;    

}

export default new RequestBodyUtils;