import { findTagsData } from "../services/tagsService.js";

export const getPostsByTag = async (req, res) => {
    try {
        const tagName = req.params.name;
        const posts = await findTagsData(tagName);
        res.status(200).json({ data: posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};