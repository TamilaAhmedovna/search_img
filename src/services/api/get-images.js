import axios from 'axios';

import { api } from '../../config/config';

const baseUrl = `${api.domen}/${api.searchPhotosUrl}`;

const getImages = async (value) => {
    const result = await axios.get(baseUrl);

    return result.data;
}

export default getImages;