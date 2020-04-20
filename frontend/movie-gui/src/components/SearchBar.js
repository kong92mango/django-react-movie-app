import React from "react";

import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <Search
        placeholder="input search text (Movie name, genre or day of week of showing)"
        enterButton
        size="large"
        onSearch={(value) => {
          onSearch(value);
        }}
      />
    </div>
  );
};
export default SearchBar;
