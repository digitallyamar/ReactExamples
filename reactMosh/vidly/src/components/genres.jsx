import React, { Component } from "react";

import { getGenres } from "../services/fakeGenreService";

class Genres extends Component {
  state = {
    genres: getGenres(),
  };

  handleGenre(id) {
    console.log(id);
  }

  render() {
    const genres = this.state.genres;

    return (
      <ul className="list-group">
        <li className="list-group-item">All Genres</li>
        {genres.map((genre) => (
          <li
            className="list-group-item"
            onClick={() => {
              this.handleGenre(genre._id);
            }}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;
