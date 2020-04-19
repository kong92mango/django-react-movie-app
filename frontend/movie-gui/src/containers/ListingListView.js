import React from "react";
import axios from "axios";

import Listings from "../components/Listing";

class ListingList extends React.Component {
  state = {
    listings: [],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      this.setState({
        listings: res.data,
      });
    });
  }

  render() {
    return <Listings data={this.state.listings} />;
  }
}

export default ListingList;
