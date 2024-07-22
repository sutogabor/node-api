import express from 'express';
import { getPostsByTag } from '../controllers/tagsController.js';

const router = express.Router();

router.get('/api/tags/:name', getPostsByTag);

export default router;