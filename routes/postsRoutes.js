import express from 'express';
import { getPosts, getPostById} from '../controllers/postsController.js';

const router = express.Router();

router.get('/api/posts', getPosts);
router.get('/api/posts/:id', getPostById);

export default router;
