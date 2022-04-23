import React from "react";
import "./postStyle.css";
import PostContent from "../commonComponent/postcontent/postContent";

export default function RecipeReviewCard({data}) {
  return (
    <div className="container post-container my-4">
      <PostContent width={600} hasButtons={true} data={data}/>
    </div>
  );
};

