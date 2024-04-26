'use client'

import { useState } from "react";

// import React, { useState } from "react";
// import { SearchIcon } from "../../Logo_Icon/Icon";
import "./_searchBar.scss";
import { SearchIcon } from "@/util/Icons/Icon";
// import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  // const Navigate = useNavigate();
  const [ValueSearch, SetValueSearch] = useState("");

  const OnSubmit = (e: Event) => {
    e.preventDefault();
    // Navigate(`/search?value=${ValueSearch.replaceAll(" ", "_の_")}`);
  };
  return (
    <form
      // onSubmit={OnSubmit}
      className="inputSearch"
      id={ValueSearch === "" ? "notSearchValue" : "hasSearchValue"}
    >
      <SearchIcon color={"transparent"} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          SetValueSearch(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primar">
        Go
      </button>
    </form>
  );
}
