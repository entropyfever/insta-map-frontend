import axios from 'axios';

export const http = ({ method, url, headers, params, body }) => {
	return axios.request({
		headers: headers,
		data: body,
		method: method,
		params,
		url: url,
	}).then((res) => {
		return res.data;
	}).catch((error) => {
		if (error.response) {
			const error_ = new Error(error.response.data.error);
			error_.code = error.response.status;
			throw error;
		} else if (error.request) {
			throw new Error('The request was made but no response was received.');
		} else {
			throw new Error('Something happened in setting up the request that triggered an Error');
		}
	});
};

