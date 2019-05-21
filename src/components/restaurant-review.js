import React, { Component } from "react";

class RestaurantReview extends Component {
  render() {
    const { review } = this.props;

    return (
      <div>
        {review.user} - {review.text}
      </div>
    );
  }
}

export default RestaurantReview;
