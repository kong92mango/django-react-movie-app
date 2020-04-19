import React from "react";
import { Route } from "react-router-dom";

import ListingList from "./containers/ListingListView";
import ListingDetail from "./containers/ListingDetailView";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ListingList} />
    <Route exact path="/:listingID" component={ListingDetail} />
  </div>
);

export default BaseRouter;
