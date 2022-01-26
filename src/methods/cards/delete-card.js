import {http} from '../utils';
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/cards/actions";
import {ACTIONS as ACTIONS_MARKERS} from "../../redux-store/markers/actions";

export const deleteCard = (card) => {
	return http({
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
		url: `${process.env.REACT_APP_API_BASE_URL}/users/${card.userId}`,
	}).then((res) => {
		card.addresses.forEach((address) => {
			store.dispatch({
				type: ACTIONS_MARKERS.DELETE_MARKER,
				payload: address
			});
		});
	}).then((res) => {
		return store.dispatch({
			type: ACTIONS.DELETE_CARD,
			payload: card
		});
	}).catch((e) => {
		throw e;
	});
};
