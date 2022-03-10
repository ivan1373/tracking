/**
|--------------------------------------------------
| TYPES
|--------------------------------------------------
*/

export const VALIDATION_MESSAGE = "auth/VALIDATION_MESSAGE";
export const VALIDATION_CLEAR = "auth/VALIDATION_CLEAR";

/**
|--------------------------------------------------
| ACTIONS
|--------------------------------------------------
*/

export const clearValidation = () => dispatch => {
  dispatch({ type: VALIDATION_CLEAR });
};

/**
|--------------------------------------------------
| REDUCERS
|--------------------------------------------------
*/

export default (state = {}, action) => {
  switch (action.type) {
    case VALIDATION_MESSAGE:
      return {
        message: action.message
      };
    case VALIDATION_CLEAR:
      return {};
    default:
      return state;
  }
};
