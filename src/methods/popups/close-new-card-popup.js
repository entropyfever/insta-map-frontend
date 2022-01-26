import * as Promise from "bluebird";
import {ACTIONS} from "../../redux-store/popups/actions";
import store from "../../redux-store/create-store";

export const closeNewCardPopup = () => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.CLOSE_NEW_CARD_POPUP,
			}
		)
	})
}
