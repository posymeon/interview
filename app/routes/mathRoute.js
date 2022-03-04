import express from 'express';

import { sum, multiply } from '../controllers/mathController.js';

const router = express.Router();

// devices Routes

//Keep something to have for a rest api
router.get('/math/sum', sum);
router.get('/math/multiply', multiply);

export default router;