import axios from 'axios';

import { api } from '../../config/config';

const getImages = async (name, page) => {
	try {
		const { domen, searchImagesUrl, itemsPerPage, headers } = api
		const url = `${domen}/${searchImagesUrl}`;

		const params = {
			query: name,
			page,
			per_page: itemsPerPage
		}
		const result = await axios.get(
			url,
			{ params, headers }
		);

		return result.data.results
			.map(i => {
				return {
					id: i.id,
					urls: i.urls
				}
			})
	} catch (err) {
		throw err
	}
}

export default getImages;