import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onInputForm = event => {
		setTerm(event.target.value);
	};
	const onSubmit = event => {
		event.preventDefault();
		onFormSubmit(term);
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="field">
					<label>Video Search</label>
					<input type="text" value={term} onChange={onInputForm} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
