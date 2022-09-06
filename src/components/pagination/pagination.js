import './pagination.css';

const Pagination = (props) => {
	if (!props.isVisible) return null

	return (
		<div
			className="pagination"
			onClick={props.getImagesList}
		>More...
		</div>
	)
}

export default Pagination;
