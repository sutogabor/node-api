import express from 'express';
import { getComments } from '../controllers/commentsController.js';

const router = express.Router();

router.get('/api/posts/:id/comments', getComments);

export default router;