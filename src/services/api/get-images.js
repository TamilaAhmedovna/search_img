import axios from 'axios';

import { api } from '../../config/config';

const url = `${api.domen}/${api.searchPhotosUrl}`;

const getImages = async (value) => {
    try {
        const result = await axios.get(
            url,
            {
                params: { query: value },
                headers: api.headers
            }
        );

        return result.data.results
            .map(i => {
                return {
                id: i.id,
                urls: i.urls 
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export default getImages;