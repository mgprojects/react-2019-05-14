import React, { Component } from "react";
import { Rate } from "antd";

class RestaurantRate extends Component {
  render() {
    let rateSum = 0;
    this.props.reviews.forEach(review => {
      rateSum = rateSum + review.rating;
    });

    let finalRate = rateSum / this.props.reviews.length;

    return (
      <div>
        <Rate value={finalRate} />
      </div>
    );
  }
}

export default RestaurantRate;
