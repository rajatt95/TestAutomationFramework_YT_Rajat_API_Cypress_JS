import schemaRegisterSuccessful from '../../fixtures/schema/register/register-successful.json';
import schemaRegisterUnsuccessful from '../../fixtures/schema/register/register-unsuccessful.json';

import schemaLoginSuccessful from '../../fixtures/schema/login/login-successful.json';
import schemaLoginUnsuccessful from '../../fixtures/schema/login/login-unsuccessful.json';

import schemaUserCreate from '../../fixtures/schema/users/user_create.json';
import schemaUserUpdatePut from '../../fixtures/schema/users/user_update_put.json';
import schemaUserUpdatePatch from '../../fixtures/schema/users/user_update_patch.json';


/**
 * Utility class for managing and providing schema data for various scenarios.
 */
class SchemaUtils {

    // Register
    REGISTER_SUCCESSFUL = schemaRegisterSuccessful;
    REGISTER_UNSUCCESSFUL = schemaRegisterUnsuccessful;

    // Login
    LOGIN_SUCCESSFUL = schemaLoginSuccessful;
    LOGIN_UNSUCCESSFUL = schemaLoginUnsuccessful;

    // Users
    USER_CREATE = schemaUserCreate;
    USER_UPDATE_PUT = schemaUserUpdatePut;    
    USER_UPDATE_PATCH = schemaUserUpdatePatch;

}

export default new SchemaUtils;