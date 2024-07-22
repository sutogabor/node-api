import { findCommentsData } from "../services/commentsService.js";

export const getComments = async (req, res) => {
  try {
    const postId = req.params.id;
    const comments = await findCommentsData(postId);
    res.status(200).json({ data: comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};