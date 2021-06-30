import React, { Component } from "react";

// Input: Page numbers calculated based on number of items per page
// Output: onClick

class Pagination extends Component {
  state = {};

  getPageNavs = (totalPages) => {
    let result = "";
    for (let i = 1; i < totalPages; i++) {
      result += (
        <li className="page-item">
          <a className="page-link" href="1">
            {i}
          </a>
        </li>
      );
    }

    console.log(result);

    return result;
  };

  render() {
    let totalPages = Math.floor(this.props.totalMovies / 4);

    if (this.props.totalMovies % 4) totalPages++;

    console.log("totalPages", totalPages);

    let listElements = [];

    for (let i = 1; i <= totalPages; i++) {
      listElements.push(
        <li className="page-item">
          <a className="page-link" href={i}>
            {i}
          </a>
        </li>
      );
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">{listElements}</ul>
      </nav>
    );
  }
}

export default Pagination;
