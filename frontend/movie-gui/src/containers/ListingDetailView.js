import React from "react";
import axios from "axios";

import { Card } from "antd";

class ListingDetail extends React.Component {
  state = {
    listing: {},
  };

  componentDidMount() {
    const listingID = this.props.match.params.listingID;
    axios.get(`http://127.0.0.1:8000/api/${listingID}`).then((res) => {
      this.setState({
        listing: res.data,
      });
    });
  }

  render() {
    return (
      <Card title={this.state.listing.title}>
        <p>
          {"Genres: "}
          <br />
          {this.state.listing.genre &&
            this.state.listing.genre.map((type) => type.name).join(", ")}
        </p>
        <br />
        <p>
          {"Summary: "}
          <br />
          {this.state.listing.description}
        </p>
        <br />
        <p>
          {"Showings: "}
          <ul>
            {this.state.listing.schedule &&
              this.state.listing.schedule.map((showtime) => (
                <li key={showtime.id}>
                  {showtime.day.charAt(0).toUpperCase() + showtime.day.slice(1)}{" "}
                  at {showtime.time}
                </li>
              ))}
          </ul>
        </p>
      </Card>
    );
  }
}

export default ListingDetail;
