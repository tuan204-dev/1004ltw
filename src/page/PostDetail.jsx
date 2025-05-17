import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postService from "../services/postService";
import { Spin } from "antd";

const PostDetail = () => {
  const { id: postId } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const { data } = await postService.getPostById(postId);

        setPostDetail(data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-70px)] grid place-items-center">
        <Spin />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      <h1>{postDetail?.title}</h1>
      <p>{postDetail?.author}</p>
      <p>{postDetail?.content}</p>
    </div>
  );
};

export default PostDetail;
