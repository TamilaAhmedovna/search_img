import './search.css';

const Search = (props) => {

	return (
		<input
			type="text"
			value={props.name}
			placeholder="Type image name.."
			className="search"
			onChange={e => props.nameOnChange(e.target.value)}
			autoFocus
		/>
	);
}

export default Search;
