import {http} from '../utils';
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/cards/actions";

export const upsertCard = (card) => {
	let userId;
	return http({
		headers: {
			'Content-Type': 'application/json',
		},
		body: card,
		method: 'POST',
		url: `${process.env.REACT_APP_API_BASE_URL}/users`,
	}).then((res) => {
		userId = res.userId;
		return http({
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'GET',
			url: `${process.env.REACT_APP_API_BASE_URL}/users/${userId}`,
		})
	}).then((res) => {
		return store.dispatch({
			type: ACTIONS.UPSERT_CARD,
			payload: res
		});
	}).catch((e) => {
		throw e;
	});
};
