import * as Promise from "bluebird";
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/aux/actions";

export const setUser = (user) => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.SET_USER,
				payload: user,
			}
		)
	})
}
