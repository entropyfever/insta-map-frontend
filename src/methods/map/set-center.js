import * as Promise from "bluebird";
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/map/actions";

export const setMapCenter = (center) => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.SET_CENTER,
				payload: center,
			}
		)
	})
}
