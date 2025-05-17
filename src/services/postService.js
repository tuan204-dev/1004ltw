import axiosInstance from "./http";

const getAllPost = async (page = 1, size = 10) => {
  const { data } = await axiosInstance.get(`/post?page=${page}&size=${size}`);

  return data;
};

const getPostById = async (id) => {
  const { data } = await axiosInstance.get(`/post/${id}`);

  return data;
};

const postService = { getAllPost, getPostById };

export default postService;
