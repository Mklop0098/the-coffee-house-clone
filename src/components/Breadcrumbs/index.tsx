import { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export type BreadCrumbs = {
  productType?: string;
  name?: string;
};

export const Breadcrumbs: React.FC<BreadCrumbs> = (props) => {
  const breadcrumItem = props;

  return (
    <Breadcrumb className="breadcrumb">
      <a href="/">Home </a>
      <a href="/collections/:id">Menu </a>
      <p>{breadcrumItem.name}</p>
    </Breadcrumb>
  );
};
