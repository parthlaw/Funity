import { Pagination } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SongCard from "./Song";
import "./Pages.css";
const Pages = ({ totalCards, cardsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pages;
