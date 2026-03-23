function Header({ onInputChange, onSortChange }) {
    return (
        <div className="Header">
            <h1 id="Title">Movie Explorer</h1>
            <div className="UserInput">
                <input 
                    className="SearchBar"
                    type="text" 
                    placeholder="Search movies..." 
                    onChange={onInputChange}
                />
                <select className="SortBy"onChange={onSortChange} >
                    <option value="popularity.desc">Sort By</option>
                    <option value="primary_release_date.asc">Release Date (ASC)</option>
                    <option value="primary_release_date.desc">Release Date (DESC)</option>
                    <option value="vote_average.asc">Rating (ASC)</option>
                    <option value="vote_average.desc">Rating (DESC)</option>
                </select>
            </div>
        </div>
    );
}

export default Header;