import * as Promise from "bluebird";
import {ACTIONS} from "../../redux-store/popups/actions";
import store from "../../redux-store/create-store";

export const setOnlyAddress = () => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.SET_ONLY_ADDRESS,
			}
		)
	})
}
