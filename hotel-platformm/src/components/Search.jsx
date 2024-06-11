const Search = () => {
    let handleSearch = (e) => {
        e.preventDefault()
        window.location = "/search/hello"
    }

    return (
      <form onSubmit={handleSearch} className="search">
        <div className="input-group">
          <input
            id="search"
            name="search"
            type="text"
            className="form-control"
            placeholder="Searchh"
            required
          />
          <label className="visually-hidden" htmlFor="search"></label>
          <button
            className="btn btn-primary text-white"
            type="submit"
            aria-label="Search"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    );
  };
  export default Search;