import React, { PureComponent } from "react";
import RestaurantMenu from "./restaurant-menu";
import RestaurantRate from "./restaurant-rate";
import RestaurantReviewsList from "./restaurant-reviews-list";

class Restaurant extends PureComponent {
  render() {
    const { image, name, menu, reviews, isMenuOpen, isReviewOpen } = this.props;

    return (
      <div>
        <img src={image} width={64} height={64} alt={name} />
        <h3>{name}</h3>

        <RestaurantRate reviews={reviews} />

        <button onClick={this.handleToggleOpenClick}>
          {isMenuOpen ? "Close menu" : "Open menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}

        <button onClick={this.handleToggleOpenClick}>
          {isReviewOpen ? "Close reviews" : "Open reviews"}
        </button>
        {isReviewOpen ? <RestaurantReviewsList reviews={reviews} /> : null}
      </div>
    );
  }

  handleToggleOpenClick = () => {
    this.props.toggleOpenMenu(this.props.id);
  };
}

export default Restaurant;
