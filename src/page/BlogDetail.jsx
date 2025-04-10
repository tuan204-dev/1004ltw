import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./BlogList";

const BlogDetail = () => {
  const { id } = useParams();

  const blogData = blogs[id];

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="flex flex-col p-5">
      <h1>{blogData.title}</h1>
      <p>{blogData.description}</p>
    </div>
  );
};

export default BlogDetail;
