import * as Promise from "bluebird";
import {ACTIONS} from "../../redux-store/popups/actions";
import store from "../../redux-store/create-store";

export const setUserAndAddress = () => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.SET_USER_AND_ADDRESS,
			}
		)
	})
}
