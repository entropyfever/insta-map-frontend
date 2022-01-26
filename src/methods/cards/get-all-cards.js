import {http} from '../utils';
import store from "../../redux-store/create-store";
import {ACTIONS} from "../../redux-store/cards/actions";

export const getAllCards = () => {
	return http({
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',
		url: `${process.env.REACT_APP_API_BASE_URL}/users`,
	}).then((res) => {
		return store.dispatch({
			type: ACTIONS.SET_CARDS,
			payload: res
		});
	}).catch((e) => {
		throw e;
	});
};
