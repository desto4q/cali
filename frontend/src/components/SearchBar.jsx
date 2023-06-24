import React from "react";

function SearchBar() {
  return (
    <div className="searchBar">
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="inputBox"
      >
        <input type="text" name="" id="" placeholder="Search.....?" />
      </form>
    </div>
  );
}

export default SearchBar;
