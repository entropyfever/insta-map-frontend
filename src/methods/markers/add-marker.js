import * as Promise from "bluebird";
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/markers/actions";

export const addMarker = (address) => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.ADD_MARKER,
				payload: address,
			}
		)
	})
}
