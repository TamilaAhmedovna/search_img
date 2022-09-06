import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api, interval } from '../../config/config';
import getImages from '../../services/api/get-images';
import { addImages, saveImages } from '../../store/images-slice';

import Images from '../images/images';
import Pagination from '../pagination/pagination';
import Search from '../search/search';
import './App.css';

let timeoutId

function App() {
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const images = useSelector(state => state.images.imagesList)
	const page = useSelector(state => state.images.page)

	const getImagesList = async (val, isNextPage) => {
		const nextPage = isNextPage ? (page + 1) : api.defaultPage
		const images = await getImages(val, nextPage)

		isNextPage
			? dispatch(addImages({ images, page: nextPage}))
		: dispatch(saveImages(images))
}

const nameOnChange = val => {
	clearTimeout(timeoutId)
	setName(val)
	if (!val) {
		dispatch(saveImages([]))
		return null;
	}
	timeoutId = setTimeout(getImagesList, interval, val)
}

return (
	<div className="App">
		<header className="App-header">
			<Search
				nameOnChange={nameOnChange}
				name={name}
			/>
		</header>
		<section>
			<Images images={images} />
			<Pagination
				getImagesList={() => getImagesList(name, true)}
				isVisible={images.length}
			/>
		</section>
	</div>
);
}

export default App;
