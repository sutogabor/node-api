import { findPostsData, findPostByIdData } from '../services/postsService.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await findPostsData();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await findPostByIdData(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }
    res.status(200).json({ data: post });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
