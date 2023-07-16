import express from 'express';
import { uploaddata } from '../../frontend/src/service/api';

const router = express.Router();
router.post('/upload', uploadUserdata)