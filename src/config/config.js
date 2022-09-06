const accessKey = 'KAoAJF1uYVioFA2_dwJwz2wSyWsvxchfa4662PRcksk'
// const secretKey = '4pScF8AVf6qth8bZbQ6TLei-gEPBaOYXFbZeetB_aC4'

export const api = {
	domen: 'https://api.unsplash.com',
	searchImagesUrl: 'search/photos',
	headers: {
		'Accept-Version': 'v1',
		'Authorization': `Client-ID ${accessKey}`
	},
	itemsPerPage: 3,
	defaultPage: 1
};

export const interval = 1000
