import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postService from "../services/postService";
import { Spin } from "antd";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await postService.getAllPost(1, 10);

        setPostList(data.data);
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
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-dark mb-8">Latest Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postList.map((post, index) => (
          <div
            key={post?._id ?? index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              alt="Workspace setup"
              className="w-full h-48 object-cover"
              data-image-keyword="workspace setup"
              data-image-color="blue"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-dark mb-2">
                {post.title}
              </h2>
              <Link to={`/post/${post._id}`} className="text-primary font-medium hover:underline">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
