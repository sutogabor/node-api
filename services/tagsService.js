import { getJSONData } from "../utils/dataHandler.js";

export const findTagsData = async (tagName) => {
  try {
    const data = await getJSONData('posts.json');
    return data.data.filter(post => post.tags.includes(tagName));
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
