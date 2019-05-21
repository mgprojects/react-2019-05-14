import React, { Component } from "react";
import RestaurantReview from "./restaurant-review";
import { accordion } from "../decorators/accordion";

class RestaurantReviewsList extends Component {
  render() {
    const { reviews } = this.props;

    return (
      <div>
        {reviews.map(review => (
          <RestaurantReview key={review.id} review={review} />
        ))}
      </div>
    );
  }
}

export default accordion(RestaurantReviewsList);
