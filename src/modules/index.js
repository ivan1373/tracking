// Redux
import { combineReducers } from "redux";

// Units
import auth from "Modules/units/Auth";
import validation from "Modules/units/Validation";

export default combineReducers({
  auth,
  validation
});
