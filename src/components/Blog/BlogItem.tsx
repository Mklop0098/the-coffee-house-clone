// import { useState, useEffect } from "react";
import { Blog } from "../../types";
import { convertDateToString } from "../../utils";
import "./style.css";

type BlogItemProps = {
  blog: Blog;
};

export const BlogItem: React.FC<BlogItemProps> = (props) => {
  const { blog } = props;
  return (
    <div className="blog-item">
      <img className="blog-item__cover" src={blog.cover} alt="" />
      <div className="blog-item__content">
        <span className="blog-item__date">
          {convertDateToString(blog.createdAt)}
        </span>
        <h3 className="blog-item__title">{blog.title}</h3>
        <p className="blog-item__short-desc">{blog.shortDescription}</p>
      </div>
    </div>
  );
};
