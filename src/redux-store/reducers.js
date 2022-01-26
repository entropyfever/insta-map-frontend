import {combineReducers} from "redux";
import cardsReducer from "./cards/reducer";
import popupsReducer from  "./popups/reducer";
import auxReducer from  "./aux/reducer";
import mapReducer from  "./map/reducer";
import markersReducer from  "./markers/reducer";

export const rootReducer = combineReducers({
	cards: cardsReducer,
	popups: popupsReducer,
	aux: auxReducer,
	map: mapReducer,
	markers: markersReducer,
});


