import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";

const Search = ({ search, setsearch, sortValue, sortOrder, sort, order }) => {
  return (
    <div className="">
      <div className="input-group mt-3 rounded-pill">
        <input
          type="text"
          className="form-control rounded-start-pill border border-success border-2"
          aria-label="Text input with dropdown button"
          placeholder="Search here by petname or ownername"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary dropdown-toggle bg-primary text-white rounded-end-pill"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li
            onClick={() => {
              sortValue("petName");
            }}
          >
            <a class="dropdown-item" href="#">
              Pet Name
              {sort == "petName" && (
                <GiCheckMark className=" float-end m-1 text-success" />
              )}
            </a>
          </li>
          <li
            onClick={() => {
              sortValue("ownerName");
            }}
          >
            <a className="dropdown-item" href="#">
              Owner
              {sort == "ownerName" && (
                <GiCheckMark className=" float-end m-1 text-success" />
              )}
            </a>
          </li>
          <li
            onClick={() => {
              sortValue("aptDate");
            }}
          >
            <a className="dropdown-item" href="#">
              Date
              {sort == "aptDate" && (
                <GiCheckMark className=" float-end m-1 text-success" />
              )}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li
            onClick={() => {
              sortOrder("asc");
            }}
          >
            <a className="dropdown-item" href="#">
              ASC
              {order == "asc" && (
                <GiCheckMark className=" float-end m-1 text-success" />
              )}
            </a>
          </li>
          <li
            onClick={() => {
              sortOrder("dsc");
            }}
          >
            <a className="dropdown-item" href="#">
              DSC
              {order == "dsc" && (
                <GiCheckMark className=" float-end m-1 text-success" />
              )}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
