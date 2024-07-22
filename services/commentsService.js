import { getJSONData } from "../utils/dataHandler.js";

export const findCommentsData = async (postId) => {
  try {
    if (isNaN(postId)) {
        throw new Error('Invalid ID: ID must be a number')
    }
    const parsed = await getJSONData('comments.json');
    return parsed.data.filter(comment => comment.post_id.toString() === postId.toString());
  } catch (err) {
    throw new Error(err);
  }
};
