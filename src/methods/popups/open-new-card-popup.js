import * as Promise from "bluebird";
import {ACTIONS} from "../../redux-store/popups/actions";
import store from "../../redux-store/create-store";

export const openNewCardPopup = () => {
	return Promise.try(() => {
		store.dispatch(
			{
				type: ACTIONS.OPEN_NEW_CARD_POPUP,
			}
		)
	})
}
