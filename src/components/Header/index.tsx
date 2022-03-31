// import { useState, useEffect } from "react"
import "./style.css";
import { UpHeaderSection } from "./UpHeaderItem";
import { DownHeaderSection } from "./DownHeaderList";
import { List } from "../List";
import { Link } from "react-router-dom";
import { useState } from "react";

const downItem = {
  title: "THE COFFE HOUSE",
};

export const Header: React.FC = () => {
  return (
    <div className="container">
      <div id="header">
        {<UpHeaderSection />}
        <div className="down-header">
          <div>
            <Link to={"/"}>
              <h1 className="title">{downItem.title}</h1>
            </Link>
          </div>
          <DownHeaderSection />
        </div>
      </div>
    </div>
  );
};
