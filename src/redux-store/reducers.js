import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import counterReducer from  "./reducers/counterReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'


export const rootReducer = combineReducers({
	toastr: toastrReducer,
	user: userReducer,
	counter: counterReducer,
});


