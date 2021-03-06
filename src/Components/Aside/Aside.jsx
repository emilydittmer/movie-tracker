import React, { Component } from "react";
import "./Aside.scss";
import { NavLink } from "react-router-dom";
import FavoriteContainer from "../../Containers/FavoriteContainer/FavoriteContainer";
import { fetchFavoriteMovies } from "../../apiCalls/apiCalls";

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      error: ""
    };
  }

  handleFavorites = async event => {
    event.preventDefault();
    let getFavoriteMovies = await fetchFavoriteMovies();
    if (getFavoriteMovies) {
      // this.props.
      console.log('getFaves')
    } else {
      this.setState({ error: "No favorited movies" });
    }
  };

  render() {
    return (
      <aside>
        <NavLink to="/favorites" component={FavoriteContainer}>
          <button>Favorites</button>
        </NavLink>
      </aside>
    );
  }
}



export default Aside;
