import { getJSONData } from "../utils/dataHandler.js";

export const findPostsData = async () => {
  try {
    return await getJSONData('posts.json');
  } catch (err) {
    throw new Error(err);
  }
};

export const findPostByIdData = async (id) => {
  try {
    if (isNaN(id)) {
        throw new Error('Invalid ID: ID must be a number')
    }
    const parsed = await getJSONData('posts.json');
    return parsed.data.find(post => post.id.toString() === id.toString());
  } catch (err) {
    throw new Error(err);
  }
};
