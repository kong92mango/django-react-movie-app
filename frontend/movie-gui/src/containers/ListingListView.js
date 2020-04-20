import React from "react";
import axios from "axios";

import Listings from "../components/Listing";
import SearchBar from "../components/SearchBar";

let searchTerm = "";

class ListingList extends React.Component {
  state = {
    listings: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/?search=${searchTerm}`).then((res) => {
      this.setState({
        listings: res.data,
      });
    });
  }

  handleChange = (newValue) => {
    axios.get(`http://127.0.0.1:8000/api/?search=${newValue}`).then((res) => {
      this.setState({
        listings: res.data,
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleChange} />
        <br />
        <br />
        <br />
        <br />
        <Listings data={this.state.listings} />
      </div>
    );
  }
}

export default ListingList;
